import { CirclePlay } from "lucide-react";
import React from "react";
export default function FeaturedSongs() {
  return (
    <>
      <div className="bg-gray-900 ">
        <div class="mx-auto max-w-xl text-center">
          <h3 class="mb-4 text-3xl md:text-4xl leading-tight text-gray-200 font-bold tracking-tighter pt-8">
            Featured Songs
          </h3>
        </div>
        {/* Remove py-8 */}
        <div className="mx-auto container py-8 max-w-7xl">
          <div className="flex flex-wrap items-center lg:justify-between justify-center">
            {/* Card 1 */}
            <div className="mx-2 w-72 lg:mb-0 mb-8">
              <div>
                <img
                  src="https://admin.shamiso-music.com/assets/3854ed6e-58ed-41c9-8da9-96dff44ecdce?fit=cover&width=300&height=300&quality=50"
                  className="w-full h-44"
                />
              </div>
              <div className="bg-gray-200">
                <div className="flex items-center justify-between px-4 pt-4"></div>
                <div className="p-4">
                  <div className="flex items-center justify-center">
                    <h2 className="text-lg font-semibold">NHEKWE YEJIRA</h2>
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="text-xs font-semibold text-gray-800 ">
                      Michael Wenyasha Masiya
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="text-xs text-gray-600 pl-5">
                      Sat, May 4, 2024
                    </p>
                  </div>
                  <div className="flex mt-4  justify-center">
                    <div className="bg-yellow-200 py-1.5 px-6 rounded-full flex justify-between items-center">
                      <CirclePlay className="p-1" />
                      <p className="text-xs text-yellow-900 ">Listen</p>
                    </div>
                  </div>
                  {/* <div className="flex items-center justify-between py-4">
                                        <h2 className="text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
                                        <h3 className="text-indigo-700 text-xl font-semibold">$350</h3>
                                    </div> */}
                </div>
              </div>
            </div>
            
            {/* Card 1 Ends */}
            {/* Card 2 */}
            <div className="mx-2 w-72 lg:mb-0 mb-8">
              <div>
                <img
                  src="https://admin.shamiso-music.com/assets/8bf903e9-274a-4b73-aa88-9cbb0123e2fc?fit=cover&width=300&height=300&quality=50"
                  className="w-full h-44"
                />
              </div>
              <div className="bg-gray-200">
                <div className="flex items-center justify-between px-4 pt-4"></div>
                <div className="p-4">
                  <div className="flex items-center justify-center">
                    <h2 className="text-lg font-semibold">IMBIRANI</h2>
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="text-xs font-semibold text-gray-800 ">
                    Esther Lazaro
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="text-xs text-gray-600 ">
                    Wed, Apr 3, 2024
                    </p>
                  </div>
                  <div className="flex mt-4  justify-center">
                  <div className="bg-yellow-200 py-1.5 px-6 rounded-full flex justify-between items-center">
                      <CirclePlay className="p-1" />
                      <p className="text-xs text-yellow-900 ">Listen</p>
                    </div>
                  </div>
                  {/* <div className="flex items-center justify-between py-4">
                                        <h2 className="text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
                                        <h3 className="text-indigo-700 text-xl font-semibold">$350</h3>
                                    </div> */}
                </div>
              </div>
            </div>
            {/* Card 2 Ends */}
            {/* Card 3  */}
            <div className="mx-2 w-72 lg:mb-0 mb-8">
              <div>
                <img
                  src="https://admin.shamiso-music.com/assets/53da12b3-2921-42d3-98ea-37aebea2260b?fit=cover&width=300&height=300&quality=50"
                  className="w-full h-44"
                />
              </div>
              <div className="bg-gray-200">
                <div className="flex items-center justify-between px-4 pt-4"></div>
                <div className="p-4">
                  <div className="flex items-center justify-center">
                    <h2 className="text-lg font-semibold">CHAMPIONS</h2>
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="text-xs font-semibold text-gray-800 ">
                    Forty Tredai
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="text-xs text-gray-600 ">
                    Mon, Apr 1, 2024
                    </p>
                  </div>
                  <div className="flex mt-4  justify-center">
                  <div className="bg-yellow-200 py-1.5 px-6 rounded-full flex justify-between items-center">
                      <CirclePlay className="p-1" />
                      <p className="text-xs text-yellow-900 ">Listen</p>
                    </div>
                  </div>
                  {/* <div className="flex items-center justify-between py-4">
                                        <h2 className="text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
                                        <h3 className="text-indigo-700 text-xl font-semibold">$350</h3>
                                    </div> */}
                </div>
              </div>
            </div>
            {/* Card 3 Ends */}
            {/* Card 4  */}
            <div className="mx-2 w-72 lg:mb-0 mb-8">
              <div>
                <img
                  src="https://admin.shamiso-music.com/assets/3cd57e7c-aa41-4ae4-823f-8402f167d7db?fit=cover&width=300&height=300&quality=50"
                  className="w-full h-44"
                />
              </div>
              <div className="bg-gray-200">
                <div className="flex items-center justify-between px-4 pt-4"></div>
                <div className="p-4">
                  <div className="flex items-center justify-center">
                    <h2 className="text-lg font-semibold">JAMBWA</h2>
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="text-xs font-semibold text-gray-800 ">
                    Professor Muzvinafundo
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="text-xs text-gray-600 ">
                    Mon, Apr 29, 2024
                    </p>
                  </div>
                  <div className="flex mt-4  justify-center">
                  <div className="bg-yellow-200 py-1.5 px-6 rounded-full flex justify-between items-center">
                      <CirclePlay className="p-1" />
                      <p className="text-xs text-yellow-900 ">Listen</p>
                    </div>
                  </div>
                  {/* <div className="flex items-center justify-between py-4">
                                        <h2 className="text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
                                        <h3 className="text-indigo-700 text-xl font-semibold">$350</h3>
                                    </div> */}
                </div>
              </div>
            </div>
            {/* Card 4 Ends */}

          
          </div>
          <div className="flex mt-4 sm:mt-8  justify-center">
                    <div className="bg-yellow-200 py-1.5 px-6 rounded-full flex justify-between items-center">
                      
                      <p className="text-xs font-bold text-yellow-900 ">View All Artists</p>
                    </div>
                  </div>
          <div className="flex flex-wrap items-center lg:justify-between justify-center pb-10 mt-16">
            {/* Card 1 */}
            {/* <div className="mx-2 w-72 lg:mb-0 mb-8">
                            <div>
                                <img src="https://cdn.tuk.dev/assets/templates/classified/Bitmap.png" className="w-full h-44" />
                            </div>
                            <div className="bg-white">
                                <div className="flex items-center justify-between px-4 pt-4">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bookmark" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                                        </svg>
                                    </div>
                                    <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                        <p className="text-xs text-yellow-500">Featured</p>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center">
                                        <h2 className="text-lg font-semibold">iphone XS</h2>
                                        <p className="text-xs text-gray-600 pl-5">4 days ago</p>
                                    </div>
                                    <p className="text-xs text-gray-600 mt-2">The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos</p>
                                    <div className="flex mt-4">
                                        <div>
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">12 months warranty</p>
                                        </div>
                                        <div className="pl-2">
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Complete box</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between py-4">
                                        <h2 className="text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
                                        <h3 className="text-indigo-700 text-xl font-semibold">$350</h3>
                                    </div>
                                </div>
                            </div>
                        </div> */}
            {/* Card 1 Ends */}
            {/* Card 2 */}
            {/* <div className="mx-2 w-72 lg:mb-0 mb-8">
                            <div>
                                <img src="https://cdn.tuk.dev/assets/templates/classified/Bitmap.png" className="w-full h-44" />
                            </div>
                            <div className="bg-white">
                                <div className="flex items-center justify-between px-4 pt-4">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bookmark" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                                        </svg>
                                    </div>
                                    <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                        <p className="text-xs text-yellow-500">Featured</p>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center">
                                        <h2 className="text-lg font-semibold">iphone XS</h2>
                                        <p className="text-xs text-gray-600 pl-5">4 days ago</p>
                                    </div>
                                    <p className="text-xs text-gray-600 mt-2">The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos</p>
                                    <div className="flex mt-4">
                                        <div>
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">12 months warranty</p>
                                        </div>
                                        <div className="pl-2">
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Complete box</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between py-4">
                                        <h2 className="text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
                                        <h3 className="text-indigo-700 text-xl font-semibold">$350</h3>
                                    </div>
                                </div>
                            </div>
                        </div> */}
            {/* Card 2 Ends */}
            {/* Card 3  */}
            {/* <div className="mx-2 w-72 lg:mb-0 mb-8">
                            <div>
                                <img src="https://cdn.tuk.dev/assets/templates/classified/Bitmap.png" className="w-full h-44" />
                            </div>
                            <div className="bg-white">
                                <div className="flex items-center justify-between px-4 pt-4">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bookmark" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                                        </svg>
                                    </div>
                                    <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                        <p className="text-xs text-yellow-500">Featured</p>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center">
                                        <h2 className="text-lg font-semibold">iphone XS</h2>
                                        <p className="text-xs text-gray-600 pl-5">4 days ago</p>
                                    </div>
                                    <p className="text-xs text-gray-600 mt-2">The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos</p>
                                    <div className="flex mt-4">
                                        <div>
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">12 months warranty</p>
                                        </div>
                                        <div className="pl-2">
                                            <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Complete box</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between py-4">
                                        <h2 className="text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
                                        <h3 className="text-indigo-700 text-xl font-semibold">$350</h3>
                                    </div>
                                </div>
                            </div>
                        </div> */}
            {/* Card 3 Ends */}
            {/* Card 4  */}/{/* Card 4 Ends */}
          </div>
        </div>
      </div>
    </>
  );
}
