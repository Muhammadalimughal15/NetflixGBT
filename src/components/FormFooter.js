import React from "react";

const FormFooter = ({ isSignInForm, toggleSignInForm }) => {
  return (
    <>
      {isSignInForm && (
        <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
          <label htmlFor="remember" className="flex items-center gap-1">
            <input id="remember" type="checkbox" className="accent-red-600" /> Remember me
          </label>
          <a href="#" className="hover:underline">
            Need help?
          </a>
        </div>
      )}

      <p className="text-gray-400 text-sm text-center">
        {isSignInForm ? "New to Netflix?" : "Already have an account?"}{" "}
        <span className="text-white hover:underline cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? "Sign up now" : "Sign in now"}
        </span>
      </p>

      <p className="text-gray-500 text-xs mt-4 leading-tight text-center">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Learn more.
        </a>
      </p>
    </>
  );
};

export default FormFooter;
