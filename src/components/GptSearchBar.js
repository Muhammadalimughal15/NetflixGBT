import openai from "../utils/openai"; // ✅ default import
import { useSelector } from "react-redux";
import { useRef } from "react";
import lang from "../utils/LanguageConstant";
import { API_OPTIONS } from "../utils/constants"; // ✅ added this import

const GptSearchBar = () => {
  const langkey = useSelector((state) => state.config.lang);
  const searchText = useRef(null); // ✅ variable lowercase rakha gaya

  // ✅ Search movie from TMDB API
  const searchMovieTMDB = async (movieName) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          movieName
        )}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );

      const data = await response.json();
      return data?.results || [];
    } catch (error) {
      console.error("TMDB Search Error:", error);
      return [];
    }
  };

  const handleGptSearchClick = async () => {
    const userInput = searchText.current.value.trim();
    if (!userInput) {
      console.warn("Please enter a movie keyword");
      return;
    }

    // ✅ GPT query
    const gptQuery =
      "Act as a movie recommendation engine. Suggest me some movies based on the following keywords: " +
      userInput +
      ". Only give me names of 5 movies, comma separated like this: Inception, The Matrix, Interstellar, The Dark Knight, Fight Club.";

    try {
      const gptResults = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: gptQuery }],
      });

      const content = gptResults?.choices?.[0]?.message?.content;
      if (!content) {
        console.error("No movie names returned from GPT");
        return;
      }

      console.log("GPT Result:", content);

      // ✅ Split movie names into array
      const gptMovies = content.split(",").map((movie) => movie.trim());
      console.log("Movie List:", gptMovies);

      // ✅ Search each movie in TMDB
      for (const movie of gptMovies) {
        const tmdbResults = await searchMovieTMDB(movie);
        console.log(`🔍 ${movie}:`, tmdbResults[0]);
      }
    } catch (error) {
      console.error("GPT API Error:", error);
    }
  };

  return (
    <div className="absolute top-0 flex justify-center rounded-lg items-center min-h-[12vh] bg-black text-white px-4 z-50">
      <form
        className="flex flex-col sm:flex-row items-center w-full max-w-2xl bg-gray-900/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-gray-700 p-3 space-y-3 sm:space-y-0 sm:space-x-3"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langkey].gptSearchPlaceholder}
          className="flex-1 px-5 py-3 bg-transparent text-white placeholder-gray-400 outline-none text-lg w-full"
        />
        <button
          type="submit"
          className="relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-3 font-semibold text-white transition-all duration-300 ease-in-out group rounded-2xl mt-1"
          onClick={handleGptSearchClick}
        >
          <span className="relative z-10">{lang[langkey].search}</span>
          <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-gradient-to-r from-red-500 to-red-700"></span>
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
