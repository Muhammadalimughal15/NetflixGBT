import React, { useRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errors, setErrors] = useState({ email: "", password: "", invalid: "" });
  const [showPassword, setShowPassword] = useState(false);

  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const handleButtonClick = async (e) => {
    e.preventDefault();
    const emailValue = email.current.value.trim();
    const passwordValue = password.current.value.trim();

    const newErrors = { email: "", password: "", invalid: "" };

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValue) newErrors.email = "Email is required.";
    else if (!emailRegex.test(emailValue)) newErrors.email = "Please enter a valid email address.";

    // Password validation
    if (!passwordValue) newErrors.password = "Password is required.";
    else if (passwordValue.length < 6) newErrors.password = "Password must be at least 6 characters long.";

    setErrors(newErrors);

    if (newErrors.email || newErrors.password) return;

    try {
      if (!isSignInForm) {
        const userCredential = await createUserWithEmailAndPassword(auth, emailValue, passwordValue);
        alert("Signed Up Successfully!");
      } else {
        alert("Signed In Successfully!");
      }
      navigate("/browse");
    } catch (error) {
      setErrors((prev) => ({ ...prev, invalid: "Invalid email or password." }));
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrors({ email: "", password: "", invalid: "" });
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <form
        onSubmit={handleButtonClick}
        className="bg-black/70 px-16 py-12 rounded-md w-[420px] flex flex-col text-white shadow-lg"
      >
        <h2 className="text-4xl font-bold mb-8 text-center">{isSignInForm ? "Sign In" : "Sign Up"}</h2>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Your name"
            className="p-4 mb-4 bg-[#333] rounded focus:outline-none focus:ring-2 focus:ring-red-600 w-full"
            required
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className={`p-4 mb-2 bg-[#333] rounded focus:outline-none focus:ring-2 w-full ${
            errors.email ? "focus:ring-red-700 border border-red-600" : "focus:ring-red-600"
          }`}
        />
        {errors.email && <p className="text-red-500 text-sm mb-3">{errors.email}</p>}

        <div className="relative mb-2">
          <input
            ref={password}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className={`p-4 bg-[#333] rounded focus:outline-none focus:ring-2 w-full pr-10 ${
              errors.password ? "focus:ring-red-700 border border-red-600" : "focus:ring-red-600"
            }`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        {errors.password && <p className="text-red-500 text-sm mb-3">{errors.password}</p>}

        {errors.invalid && <p className="text-red-500 text-sm text-center mb-3">{errors.invalid}</p>}

        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 transition-all py-3 rounded font-semibold mb-4"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

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
      </form>
    </div>
  );
};

export default LoginForm;
