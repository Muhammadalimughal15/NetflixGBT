import React from "react";

const VideoTitle = ({ title, overview }) => {
  return ( 
    <div className="w-screen aspect-video pt-[20%] px-24 text-white  absolute bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold mb-4">{title}</h1>
      <p className="text-lg w-1/2 mb-6 break-words">{overview}</p>
      <div className="space-x-4">
        <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-300 transition">
          ▶ Play
        </button>
        <button className="bg-gray-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-700 transition">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
