import React from "react";

const LoginForm = () => {
  const [isSignInForm, setIsSignInForm] = React.useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <form className="bg-black/70 px-16 py-12 rounded-md w-[420px] flex flex-col text-white">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-8">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>

        {/* Inputs */}
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Your name"
            className="p-4 mb-4 bg-[#333] rounded focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        )}
        <input
          type="email"
          placeholder="Email or phone number"
          className="p-4 mb-4 bg-[#333] rounded focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 mb-6 bg-[#333] rounded focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 transition-all py-3 rounded font-semibold mb-4"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {/* Remember / Help (only show on Sign In) */}
        {isSignInForm && (
          <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
            <label className="flex items-center gap-1">
              <input type="checkbox" className="accent-red-600" /> Remember me
            </label>
            <a href="#" className="hover:underline">
              Need help?
            </a>
          </div>
        )}

        {/* Toggle Between Forms */}
        <p className="text-gray-400 text-sm text-center">
          {isSignInForm ? "New to Netflix?" : "Already have an account?"}{" "}
          <span
            className="text-white hover:underline cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign up now" : "Sign in now"}
          </span>
        </p>

        {/* reCAPTCHA Text */}
        <p className="text-gray-500 text-xs mt-4 leading-tight text-center">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Learn more.
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
