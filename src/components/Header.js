import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { lOGO as LOGO, USER_ICON } from "../utils/constants";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);          // ✅ Sign out the user
      navigate("/login", { replace: true }); // ✅ Redirect to login screen
    } catch (error) {
      console.error("Sign-out error:", error);
    }
  };

  return (
    <header className="absolute top-0 left-0 w-full flex items-center justify-between px-12 py-6 z-30 bg-gradient-to-b from-black/80 to-transparent">
      {/* Logo */}
      <img className="w-36 cursor-pointer" src={LOGO} alt="Logo" />

      {/* Profile & Dropdown */}
      <div className="relative flex items-center gap-2">
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

        {/* Dropdown Menu */}
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
