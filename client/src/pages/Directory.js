import React from "react";

/* This example requires Tailwind CSS v2.0+ */
const bot = [
    {
      Bot: 'Gaming Search Bot',
      creator: 'X-Bots',
      department: 'Gaming',
      botList: 'Amazon X-Box Search Bot',
      image:
        'https://greendropship.com/wp-content/uploads/2020/05/amazon11111.jpg',
    },
    {
        Bot: 'Shoe Release Search Bot',
        creator: 'Snkrs Season',
        department: 'Fashion',
        botList: 'Snkrs Search Bot',
        image:
          'https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/56/b5/07/56b50784-fb43-d2ed-6a6c-78e55fb436f8/SNKRS-AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png',
      },
      {
        Bot: 'Graphics Card Search Bot',
        creator: '8k Bots',
        department: 'Technology',
        botList: 'Amazon Graphics Card Search Bot',
        image:
          'https://assets1.ignimgs.com/2019/04/05/graphicscards2019-blogroll-1554499813756.jpg',
      },
  ]


function Directory() {

    return (
        <div>
            {/* Page title starts */}
            <div className="relative z-10 bg-gray-800 pt-8 pb-16">
                <div className="container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
                    <div>
                        <h4 className="text-2xl font-bold leading-tight text-white">Directory</h4>
                    </div>
                </div>
            </div>
            {/* Page title ends */}
            <div className="bg-gray-200 pb-10">
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
                                        <option selected className="text-sm text-gray-600">
                                            Amazon X-Box Search Bot{" "}
                                        </option>
                                        <option className="text-sm text-gray-600">Bot 2 </option>
                                        <option className="text-sm text-gray-600">Bot 3 </option>
                                        <option className="text-sm text-gray-600">Bot 4 </option>
                                    </select>
                                </div>
                                <ul className="hidden lg:flex flex-row items-center h-full">
                                    <li className="ml-4 my-2 lg:my-0 rounded text-base text-gray-800 px-4 py-2 bg-gray-200">Amazon X-Box Search Bot</li>
                                    <li className="pl-10 my-0 text-base text-gray-600">Bot 2</li>
                                    <li className="pl-10 my-0 text-base text-gray-600">Bot 3</li>
                                    <li className="pl-10 my-0 text-base text-gray-600">Bot 4</li>
                                </ul>
                            </div>
                            {/* Remove class [ h-64 ] when adding a card block */}
                            <div className="container mx-auto h-64">
                                <div className="bg-white w-full h-full rounded shadow">{/* Place your content here */}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Directory;

//export default Directory