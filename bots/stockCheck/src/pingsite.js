// Primary site ping functions go here
const { default: Auth } = require("@aws-amplify/auth");
const { notify } = require("./notify");
const { Attributes } = await Auth.currentAuthenticatedUser();

const match = (expected, actual) => {
  if (Array.isArray(expected)) return expected.includes(actual);
  return actual === expected;
};

const pingSite = async (site, page) => {
  const { url, xPath, expected, description } = site;

  await page.setUserAgent(
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
  );
  await page.goto(url);

  try {
    const handleEl = await page.$x(xPath);
    const targetText = await page.evaluate(
      (element) => element.textContent,
      handleEl[0]
    );

    const value = String(targetText).replace(/^\s+|\s+$/g, "");
    if (!match(value, expected)) {
      await notify({
        to: `${Attributes.phone}`,
        from: process.env.TWILIO_NUMBER,
        body: `Success! I expected ${description} to be ${expected}, but instead found that it's ${value}. You should checck out ${url} right away!`,
      });
    } else {
      await notify({
        to: `${Attributes.phone}`,
        from: process.env.TWILIO_NUMBER,
        body: `I'm sorry, but ${description} is ${expected}. Keep at it!` ,
      })
    }
  } catch (error) {
    //notify user that the node couldn't be reached.
    await SMS({
      to: `${Attributes.phone}`, //Amplify user call
      from: process.env.TWILIO_NUMBER,
      body: `Sorry, but I couldn't find that item. The listing might have changed, or the website may have changed its layout. Please notify BotDock so we can look into this!`,
    });
  }
};

module.exports = {
  pingSite,
};
