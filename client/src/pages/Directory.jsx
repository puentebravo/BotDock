import * as React from "react";
class Directory extends React.Component {
    render() {
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
    return (
    <div className="container mx-auto px-2">
        <div className="grid grid-cols-2 auto-rows-max">
            <div className="flex flex-row">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                        <tr>
                            <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                            Bot List
                            </th>
                            <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                            Creator
                            </th>
                            <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                            Status
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {bot.map((botType) => (
                            <tr key={botType.botList}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                    <img className="h-10 w-10 rounded-full" src={botType.image} alt="" />
                                </div>
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">{botType.name}</div>
                                    <div className="text-sm text-gray-500">{botType.botList}</div>
                                </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{botType.creator}</div>
                                <div className="text-sm text-gray-500">{botType.department}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Active
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{botType.role}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>
                </div>
                <div>

                <div class="container mx-auto">
                    <form action="#" method="POST">
                      <div className="mt-1 flex rounded-md shadow-sm">
                  <div>
                    <label htmlFor="Description" className="block text-sm font-medium text-gray-700">
                      Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="you@example.com"
                        defaultValue={''}
                      />
                    </div>
                  <div>
                    <div className="mt-1 flex items-center">
                    </div>
                  </div>
                    </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Deploy
                  </button>
                </div>
              </div>
            </form>
          </div>
          </div>
      </div>
    </div>
    )
  }
}
export default Directory