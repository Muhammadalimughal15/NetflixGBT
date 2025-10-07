import React from "react";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full flex items-center justify-between px-12 py-6 z-20">
      {/* Netflix Logo */}
      <img
        className="w-40 cursor-pointer"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />

     
    </header>
  );
};

export default Header;
