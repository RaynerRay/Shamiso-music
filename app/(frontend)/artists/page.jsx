import React from "react";
import { ArrowBigRight, CirclePlay, CirclePlayIcon } from "lucide-react";

// Sample song data array
const songsData = [
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
          <button className="bg-yellow-200 hover:bg-yellow-300 py-1.5 px-6 rounded-full flex justify-between items-center">
            <ArrowBigRight className="p-1" />
            <p className="text-xs text-yellow-900 ">View Artist</p>
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Artists component
export default function Artists() {
  return (
    <>
      <div className="bg-gray-900">
        <div className="mx-auto max-w-xl text-center">
          <h3 className="mb-4 text-3xl md:text-4xl leading-tight text-gray-200 font-bold tracking-tighter pt-8">
            Our Artists
          </h3>
        </div>
        <div className="mx-auto container py-8 max-w-7xl">
          <div className="flex flex-wrap items-center lg:justify-between justify-center">
            {/* Map over songsData to render SongCard */}
            {songsData.map((song) => (
              <SongCard
                key={song.id}
                imageSrc={song.imageSrc}
                title={song.title}
                artist={song.artist}
                date={song.date}
              />
            ))}
          </div>
          <div className="flex mt-4 sm:mt-8 justify-center">
            <div className="bg-yellow-200 py-1.5 px-6 rounded-full flex justify-between items-center">
              <p className="text-xs font-bold text-yellow-900 ">View All Artists</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
