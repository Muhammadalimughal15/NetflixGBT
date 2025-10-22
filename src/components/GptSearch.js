import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-white">
      <img
        src={BG_URL}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <GptSearchBar />
      <GptMoviesSuggestions />
    </div>
  );
};

export default GptSearch;
