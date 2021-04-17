require("dotenv").config();

const puppeteer = require("puppeteer");
const config = require("./config.json");
const sites = require("./sites.json");
const { pingSite } = require("./src/pingsite");

const browser = await puppeteer.launch();
const page = await browser.newPage();

const deploy = async () => {
  try {
    for (let index = 0; index < sites.length; index += 1) {
      await pingSite(sites[index], page);
    }
  } finally {
      await browser.close();
  }
};

deploy(); 
