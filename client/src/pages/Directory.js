import React, { useState } from "react";

const bots = [

  { name: "Amazon X-Box Search Bot" },
  { name: "Bot 2" },
  { name: "Bot 3" },
  { name: "Bot 4" },
];

function Directory() {

  { name: "Trouble finding the newest Xbox? This bot is for you!" },
  { name: "This is Bot #2. Aren't they cute? Say Hi!" },
  { name: "This is Bot #3. Aren't they cute? Say Hi!" },
  { name: "This is Bot #4. Aren't they cute? Say Hi!" },
];

function Index() {

  const [selectedBot, setSelectedBot] = useState(0);

  return (
    <div style={{ minHeight: "100%" }}>

      {/* Page title starts */}
      <div className="relative z-10 bg-gray-800 pt-8 pb-16">
        <div className="container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <div>
            <h4
              className="text-2xl font-bold leading-tight text-white"
              style={{ marginBottom: "-5%" }}
            >
              Directory
            </h4>
          </div>
        </div>
      </div>
      {/* Page title ends */}

      <div className="bg-gray-200 pb-10">
        <div className="container px-6 mx-auto">
          <div className="relative z-10 w-full">
            <div className="w-full -mt-8 h-auto">
              {/* Remove class [ h-64 ] when adding a card block */}
              <div
                className="container mx-auto h-64"
                style={{ height: "1000%" }}
              >
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

                        <img onClick={() => setSelectedBot(0)}

                          src="https://drydenart.weebly.com/uploads/8/9/6/1/8961653/5076016_orig.gif"
                          style={{
                            height: "20%",
                            width: "20%",
                            marginLeft: "auto",
                            marginRight: "auto",
                            paddingTop: "-",
                          }}
                        />
                      </p>
                      <p
                        className="text-sm text-gray-600"
                        onClick={() => setSelectedBot(1)}
                      >
                        Bot 2{" "}
                      </p>

                      <img onClick={() => setSelectedBot(1)}

                        src="https://media0.giphy.com/media/3og0IUzdgwVczU67eg/giphy.gif"
                        style={{
                          height: "20%",
                          width: "30%",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      />
                      <p
                        className="text-sm text-gray-600"
                        onClick={() => setSelectedBot(2)}
                      >
                        Bot 3{" "}
                      </p>

                      <img onClick={() => setSelectedBot(2)}

                        src="https://media4.giphy.com/media/20NLMBm0BkUOwNljwv/source.gif"
                        style={{
                          height: "30%",
                          width: "30%",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      />
                      <p
                        className="text-sm text-gray-600"
                        onClick={() => setSelectedBot(3)}
                      >
                        Bot 4{" "}
                      </p>

                      <img onClick={() => setSelectedBot(3)}

                        src="https://cdn.dribbble.com/users/3603415/screenshots/10471601/robot-rig-loop.gif"
                        style={{
                          height: "30%",
                          width: "30%",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      />
                    </div>

                    <div className="border-solid border-4" style={{font:"menu", fontSize:"18px"}}>

                      <p className="text-center mb-8">
                        {bots[selectedBot].name}
                      </p>
                      <p>Info</p>
                      <div>
                        <div className="p-8 border-solid border-4">
                          <p>Description</p>
                          <div className="text-center">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-16">
                              Deploy
                            </button>
                            <br></br>
                            <br></br>
                            <img
                              src="https://lh3.googleusercontent.com/proxy/iFXH4nqQN9XWJpVcz2FbXfvaFhbMbN4GjQZGq8kjOXNARGr51oWarMwR9I3LilrYzHRFzNGs1PGBWxVRF19QU3cetrHteBM30qqGz0B8sCm_MaEHed8Q-wkzeEX4vVvSJlPON2_jY1dyvqFSXx8WBMG_s9GsMVwQJ-2EaFnzdRwJajSBY5Te8RcHhiIPcq8"
                              style={{
                                height: "20%",
                                width: "20%",
                                marginLeft: "auto",
                                marginRight: "auto",
                              }}
                            />
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
