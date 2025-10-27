import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { lOGO as LOGO, USER_ICON } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearchView } from "../utils/GptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch(); // ✅ Correct way
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Sign-out error:", error);
    }
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <header className="absolute top-0 left-0 w-full  items-center  px-12 py-6 z-30 bg-gradient-to-b from-black/80 to-transparent  flex flex-col md:flex-row justify-center  md:justify-between ">
      <img className="w-36 cursor-pointer" src={LOGO} alt="Logo" />

      <div className="relative flex items-center gap-2">
        {showGptSearch && (
          <select
            className="w-48 px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        )}

        <button
          className="py-2 px-2 mx-4 my-2 bg-purple-300 text-black rounded-lg"
          onClick={handleGptSearchClick}
        >
          {showGptSearch? "Homepage": " GPT Search"}
        </button>

        <img
          src={USER_ICON}
          alt="User"
          className="w-10 h-10 rounded cursor-pointer border-2 border-transparent hover:border-white transition-all"
          onClick={() => setShowMenu(!showMenu)}
        />
        <ChevronDown
          size={22}
          className="text-white cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        />

        {showMenu && (
          <div className="absolute right-0 top-14 bg-black/90 text-white rounded shadow-lg border border-gray-700 w-32 z-50">
            <button
              onClick={handleSignOut}
              className="w-full text-left px-4 py-2 hover:bg-gray-800 rounded"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
