import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 flex flex-col justify-center px-12 md:px-24 text-white z-20">
      <div className="max-w-2xl space-y-6">
        {/* 🎬 Movie Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          {title}
        </h1>

        {/* 📝 Movie Overview */}
        <p className="text-base md:text-lg text-gray-200 leading-relaxed break-words">
          {overview}
        </p>

        {/* 🎮 Action Buttons */}
        <div className="flex space-x-4 pt-4">
          <button className="flex items-center gap-2 bg-white text-black px-6 py-2 md:px-8 md:py-3 rounded-md font-semibold hover:bg-gray-300 transition shadow-md">
            ▶ Play
          </button>
          <button className="flex items-center gap-2 bg-gray-700/80 text-white px-6 py-2 md:px-8 md:py-3 rounded-md font-semibold hover:bg-gray-600 transition shadow-md">
            ℹ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
