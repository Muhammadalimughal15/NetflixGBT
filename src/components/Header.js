import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { lOGO as LOGO } from "../utils/constants";
import { USER_ICON } from "../utils/constants";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/"); // 👈 redirect to login page
    } catch (error) {
      console.error("Sign-out error:", error);
    }
  };

  return (
    <header className="absolute top-0 left-0 w-full flex items-center justify-between px-12 py-6 z-20 bg-gradient-to-b from-black/80 to-transparent">
      {/* Netflix Logo */}
      <img
        className="w-36 cursor-pointer"
        src={LOGO}
        alt="Netflix Logo"
      />

      {/* Right Section */}
      <div className="relative flex items-center gap-2">
        {/* Profile Image */}
        <img
          src={USER_ICON}
          alt="User logo"
          className="w-10 h-10 rounded cursor-pointer border-2 border-transparent hover:border-white transition-all"
        />

        {/* Arrow Icon */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="text-white hover:text-gray-300 transition"
        >
          <ChevronDown size={22} />
        </button>

        {/* Dropdown */}
        {showMenu && (
          <div className="absolute right-0 top-14 bg-black/90 text-white rounded shadow-lg border border-gray-700 w-32">
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
