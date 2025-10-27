import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center text-white">
      {/* Background Image */}
      <img
        src={BG_URL}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Search Bar Section */}
      <div className="w-full flex justify-center sm:pt-20 pt-100 px-4">
        {/* ✅ Search bar centered and spaced on small screens */}
        <GptSearchBar />
      </div>

      {/* Suggestions Section */}
      <div className="w-full mt-6 sm:mt-10">
        <GptMoviesSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
