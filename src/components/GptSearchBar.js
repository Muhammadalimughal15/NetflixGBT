import { useSelector } from "react-redux";
import lang from "../utils/LanguageConstant";

const GptSearchBar = () => {
 const langkey = useSelector ((state) => state.config.lang);


  return (
    <div className="absolute top-0 flex justify-center rounded-lg items-center min-h-[12vh] bg-black text-white px-4 z-50">
      <form className="flex flex-col sm:flex-row items-center w-full max-w-2xl bg-gray-900/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-gray-700 p-3 space-y-3 sm:space-y-0 sm:space-x-3">
        <input
          type="text"
          placeholder={lang[langkey].gptSearchPlaceholder}
          className="flex-1 px-5 py-3 bg-transparent text-white placeholder-gray-400 outline-none text-lg w-full"
        />
        <button
          type="submit"
          className="relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-3 font-semibold text-white transition-all duration-300 ease-in-out group rounded-2xl mt-1"
        >
          <span className="relative z-10">{lang[langkey].search}</span>
          <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-gradient-to-r from-red-500 to-red-700"></span>
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
