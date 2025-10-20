// src/components/VideoBackground.jsx
import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  // Get trailer video from Redux store
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  // Call custom hook to fetch trailer
  useMovieTrailer(movieId);

  // If no trailer available yet, show loading message
  if (!trailerVideo) {
    return (
      <div className="flex items-center justify-center w-full h-[60vh] text-white text-xl">
        Loading trailer...
      </div>
    );
  }

  return (
    <div className="w-screen h-[56.25vw] relative overflow-hidden">
      {/* 🎬 YouTube Trailer */}
      <iframe
        className="w-full h-full absolute top-0 left-0"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      {/* Optional: dark gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>

      {/* Optional: You can also show movie title & overview */}
      {/* <div className="absolute bottom-10 left-10 text-white space-y-2">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="max-w-lg text-lg opacity-80">{overview}</p>
      </div> */}
    </div>
  );
};

export default VideoBackground;
