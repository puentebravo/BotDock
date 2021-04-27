import React, { useState } from "react";

const bots = [
    {name: "Amazon X-Box Search Bot"},
    {name: "Bot 2"},
    {name: "Bot 3"},
    {name: "Bot 4"}
];

function Index() {
    const [selectedBot, setSelectedBot] = useState(0);

    return (
        
        <div style={{minHeight: "100%"}}>
            {/* Page title starts */}
            <div className="relative z-10 bg-gray-800 pt-8 pb-16">
                <div className="container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
                    <div>
                        <h4 className="text-2xl font-bold leading-tight text-white">Directory</h4>
                    </div>
                </div>
            </div>                          
            {/* Page title ends */}
            <div className="bg-gray-200 pb-10" style={{marginTop:"-2%"}}>
                <div className="container px-6 mx-auto">
                    <div className="relative z-10 w-full">
                        <div className="w-full -mt-8 h-auto">
                            <div className="w-full h-auto lg:h-20 mb-6 rounded shadow bg-white">
                                <div className="lg:hidden bg-white w-full relative">
                                    <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-selector" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="8 9 12 5 16 9" />
                                            <polyline points="16 15 12 19 8 15" />
                                        </svg>
                                    </div>
                                    <select aria-label="Selected tab" className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10">
                                        <option selected className="text-sm text-gray-600" onClick={() => setSelectedBot(0)}>
                                            Amazon X-Box Search Bot {" "}<br></br> 
                                        </option>
                                        <option className="text-sm text-gray-600" onClick={() => setSelectedBot(1)}>Bot 2 </option>
                                        <option className="text-sm text-gray-600" onClick={() => setSelectedBot(2)}>Bot 3 </option>
                                        <option className="text-sm text-gray-600" onClick={() => setSelectedBot(3)}>Bot 4 </option>
                                    </select>
                                </div>
                                <ul className="hidden lg:flex flex-row items-center h-full" style={{marginTop:"2.6%"}}>
                                    <li className="pl-10 my-0 text-base text-gray-600" onClick={() => setSelectedBot(0)}>Amazon X-Box Search Bot
                               
                                    </li>
                                    <li className="pl-10 my-0 text-base text-gray-600" onClick={() => setSelectedBot(1)}>Bot 2</li>
                                    <li className="pl-10 my-0 text-base text-gray-600" onClick={() => setSelectedBot(2)}>Bot 3</li>
                                    <li className="pl-10 my-0 text-base text-gray-600" onClick={() => setSelectedBot(3)}>Bot 4</li>
                                </ul>
                            </div>
                            {/* Remove class [ h-64 ] when adding a card block */}
                            <div className="container mx-auto h-64" style={{height: "1000%"}}>
                                <div className="bg-white w-full h-full rounded shadow">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="border-solid border-4 h-48 overflow-scroll" style={{height: "100%"}}>
                                            <p className="text-sm text-gray-600" onClick={() => setSelectedBot(0)}>
                                                Amazon X-Box Search Bot{" "}
                                                <img src="https://drydenart.weebly.com/uploads/8/9/6/1/8961653/5076016_orig.gif" style={{height: "20%", width: "20%", marginLeft:"auto", marginRight:"auto", paddingTop:"-"}} />
                                            </p>
                                            <p className="text-sm text-gray-600" onClick={() => setSelectedBot(1)}>Bot 2 </p>
                                            <img src="https://webstockreview.net/images/clipart-monkey-gif-animation-12.gif" style={{height: "20%", width: "20%", marginLeft:"auto", marginRight:"auto"}} />
                                            <p className="text-sm text-gray-600" onClick={() => setSelectedBot(2)}>Bot 3 </p>
                                            <img src="https://media4.giphy.com/media/20NLMBm0BkUOwNljwv/source.gif" style={{height: "30%", width: "30%", marginLeft:"auto", marginRight:"auto"}} />
                                            <p className="text-sm text-gray-600" onClick={() => setSelectedBot(3)}>Bot 4 </p>
                                            <img src="https://cdn.dribbble.com/users/3603415/screenshots/10471601/robot-rig-loop.gif" style={{height: "30%", width: "30%", marginLeft:"auto", marginRight:"auto"}} />
                                        </div>
                                        <div className="border-solid border-4" >
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