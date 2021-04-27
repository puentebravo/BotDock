import React, { useState } from "react";
import API from "../utils/API.js";

const bots = [
  {
    name: "Xbox Amazon Search Bot",
    description: "Trouble finding the newest Xbox? This bot is for you!",
  },
  { name: "Bot #2", description: "This is Bot #2. Aren't they cute? Say Hi!" },
  {
    name: "Bot #3",
    description: "This is Bot #3. Bot #3 is a bit confused. Say Hi!",
  },
  {
    name: "Bot #4",
    description: "This is Bot #4. Bot #4 has places to go. Say Hi!",
  },
];

function Index() {
  const [selectedBot, setSelectedBot] = useState(0);

  const deployBot = () => {
    API.getBot().then(() => {
      alert(
        "Bot Deployed! Be sure to check your SMS messages. If you don't hear from your bot in the next few minutes, make sure the phone number we have on file is correct."
      );
    });
  };

  return (
    <div style={{ minHeight: "100%" }}>
      <div
        className="bg-gray-200 pb-10"
        style={{
          paddingBottom: "100%",
          marginTop: "-2%",
          position: "relative",
        }}
      >
        <div className="container px-6 mx-auto" style={{ paddingTop: "8%" }}>
          <div className="relative z-10 w-full">
            <div className="w-full -mt-8 h-auto">
              {/* Remove class [ h-64 ] when adding a card block */}
              <div
                className="container mx-auto h-64"
                style={{ height: "1000%" }}
              >
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "25px",
                    marginTop: "-2%",
                  }}
                >
                  Choose Your Bot Below
                </p>
                <div className="bg-white w-full h-full rounded shadow">
                  <div className="grid grid-cols-2 gap-4">
                    <div
                      className="border-solid border-4 h-48 overflow-scroll"
                      style={{ height: "100%" }}
                    >
                      <p
                        className="text-sm text-gray-600"
                        onClick={() => setSelectedBot(0)}
                      >
                        Amazon X-Box Search Bot{" "}
                        <img
                          onClick={() => setSelectedBot(0)}
                          src="https://drydenart.weebly.com/uploads/8/9/6/1/8961653/5076016_orig.gif"
                          style={{
                            height: "20%",
                            width: "20%",
                            marginLeft: "auto",
                            marginRight: "auto",
                            paddingTop: "-",
                          }}
                          alt="Robot"
                        />
                      </p>
                      <p
                        className="text-sm text-gray-600"
                        onClick={() => setSelectedBot(1)}
                      >
                        Bot 2{" "}
                      </p>
                      <img
                        onClick={() => setSelectedBot(1)}
                        src="https://media0.giphy.com/media/3og0IUzdgwVczU67eg/giphy.gif"
                        style={{
                          height: "20%",
                          width: "30%",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                        alt="Robot"
                      />
                      <p
                        className="text-sm text-gray-600"
                        onClick={() => setSelectedBot(2)}
                      >
                        Bot 3{" "}
                      </p>
                      <img
                        onClick={() => setSelectedBot(2)}
                        src="https://media4.giphy.com/media/20NLMBm0BkUOwNljwv/source.gif"
                        style={{
                          height: "30%",
                          width: "30%",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                        alt="Robot"
                      />
                      <p
                        className="text-sm text-gray-600"
                        onClick={() => setSelectedBot(3)}
                      >
                        Bot 4{" "}
                      </p>
                      <img
                        onClick={() => setSelectedBot(3)}
                        src="https://cdn.dribbble.com/users/3603415/screenshots/10471601/robot-rig-loop.gif"
                        style={{
                          height: "30%",
                          width: "30%",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                        alt="Robot"
                      />
                    </div>
                    <div
                      className="border-solid border-4"
                      style={{ font: "menu", fontSize: "18px" }}
                    >
                      <p className="text-center mb-8"></p>

                      <p style={{ textAlign: "center", marginTop: "-4%" }}>
                        Name:
                      </p>
                      <br></br>
                      <div style={{ textAlign: "center" }}>
                        {bots[selectedBot].name}
                      </div>
                      <div>
                        <div className="p-8 border-solid border-4">
                          <p style={{ textAlign: "center", marginTop: "-4%" }}>
                            Description:
                          </p>
                          <br></br>
                          <div style={{ textAlign: "center" }}>
                            {bots[selectedBot].description}
                          </div>
                          <div className="text-center">
                            <button
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-16"
                              onClick={deployBot()}
                            >
                              Deploy
                            </button>
                            <br></br>
                            <br></br>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;

//export default Directory
