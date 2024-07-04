import Image from 'next/image';
import { CirclePlay } from "lucide-react";

// Sample data array
const productsData = [
    {
      id: 1,
      imageSrc:
        "https://admin.shamiso-music.com/assets/3854ed6e-58ed-41c9-8da9-96dff44ecdce?fit=cover&width=300&height=300&quality=50",
      title: "NHEKWE YEJIRA",
      artist: "Michael Wenyasha Masiya",
      date: "Sat, May 4, 2024",
    },
    {
      id: 2,
      imageSrc:
        "https://admin.shamiso-music.com/assets/8bf903e9-274a-4b73-aa88-9cbb0123e2fc?fit=cover&width=300&height=300&quality=50",
      title: "IMBIRANI",
      artist: "Esther Lazaro",
      date: "Wed, Apr 3, 2024",
    },
    {
      id: 3,
      imageSrc:
        "https://admin.shamiso-music.com/assets/53da12b3-2921-42d3-98ea-37aebea2260b?fit=cover&width=300&height=300&quality=50",
      title: "CHAMPIONS",
      artist: "Forty Tredai",
      date: "Mon, Apr 1, 2024",
    },
    {
      id: 4,
      imageSrc:
        "https://admin.shamiso-music.com/assets/3cd57e7c-aa41-4ae4-823f-8402f167d7db?fit=cover&width=300&height=300&quality=50",
      title: "JAMBWA",
      artist: "Professor Muzvinafundo",
      date: "Mon, Apr 29, 2024",
    },
  ];

  // SongCard component to render each song
const SongCard = ({ imageSrc, title, artist, date }) => (
    <div className="mx-2 w-72 lg:mb-0 mb-8">
      <div>
        <img src={imageSrc} className="w-full h-44" />
      </div>
      <div className="bg-gray-200">
        <div className="flex items-center justify-between px-4 pt-4"></div>
        <div className="p-4">
          <div className="flex items-center justify-center">
            <h2 className="text-lg font-semibold">{title}</h2>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-xs font-semibold text-gray-800 ">{artist}</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-xs text-gray-600 ">{date}</p>
          </div>
          <div className="flex mt-4  justify-center">
            <div className="bg-yellow-200 py-1.5 px-6 rounded-full flex justify-between items-center">
              <CirclePlay className="p-1" />
              <p className="text-xs text-yellow-900 ">Listen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

export default function NewInSection() {
  return (
    <section className="pt-12 pb-24 2xl:pb-44 bg-blueGray-100">
      <div className="container px-4 mx-auto">
      <div className="pb-9 text-center border-b border-black border-opacity-5">
              <div className="relative">
                <h2 className="mb-5 md:mb-0 text-4xl xl:text-4xl leading-normal font-heading font-medium text-center">All Songs</h2>
                <span className="md:absolute md:right-0 md:bottom-3 text-sm text-gray-400 font-medium">1449 songs found</span>
              </div>
            </div>
        <div className="flex flex-wrap -mx-4 mb-12 xl:mb-16">

          {/* Sidebar filter section */}
          <div className="w-full md:w-1/2 lg:w-4/12 xl:w-3/12 mb-10 md:mb-0 px-4">
            <div className="p-10 xl:p-12 xl:pt-10 mb-6 bg-white rounded-3xl">
              <h2 className="mb-8 text-3xl leading-9 font-heading font-medium">Category</h2>
              <a href="#" className="block mb-5 font-heading font-medium">Jazz</a>
              <a href="#" className="block mb-5 font-heading font-medium">Afro Pop</a>
              {/* Example categories with counts */}
              <div className="mb-9">
                {['Country', 'Hip Hop', 'RnB'].map((category, index) => (
                  <a key={index} href="#" className="flex items-center justify-between mb-5 font-heading font-medium">
                    <span>{category}</span>
                    {/* Placeholder for product count */}
                    <span className="text-sm text-gray-300">267 new</span>
                  </a>
                ))}
              </div>
              <a href="#" className="flex items-center pb-1 text-xl text-green-500 hover:text-green-600 font-bold tracking-tight max-w-max border-b border-green-600 hover:border-green-700">
                <span className="mr-5">See all</span>
                <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 11.3L6.5 15.5L6.5 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M1.5 11.5L6.5 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Main content section */}
          <div className="w-full md:w-1/2 lg:w-8/12 xl:w-9/12 px-4">
         

            {/* Product list */}
            <div className="sm:flex sm:flex-wrap mb-10 xl:mb-24 gap-8">
              {/* Map over productsData array */}
              {productsData.map((song) => (
              <SongCard
                key={song.id}
                imageSrc={song.imageSrc}
                title={song.title}
                artist={song.artist}
                date={song.date}
              />
            ))}
            </div>

            {/* More products link */}
            <div className="sm:mx-auto sm:w-96">
              <a className="block py-5 px-10 w-full text-xl leading-6 text-white font-medium tracking-tighter font-heading text-center bg-black hover:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" href="#">
                More Songs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
