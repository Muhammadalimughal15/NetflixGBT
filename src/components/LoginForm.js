import React, { useRef, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";
import PasswordField from "./PasswordField";
import FormFooter from "./FormFooter";

const LoginForm = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errors, setErrors] = useState({ email: "", password: "", invalid: "" });

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();

  const handleButtonClick = async (e) => {
    e.preventDefault();
    const emailValue = email.current.value.trim();
    const passwordValue = password.current.value.trim();

    const newErrors = { email: "", password: "", invalid: "" };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValue) newErrors.email = "Email is required.";
    else if (!emailRegex.test(emailValue)) newErrors.email = "Please enter a valid email address.";

    if (!passwordValue) newErrors.password = "Password is required.";
    else if (passwordValue.length < 6) newErrors.password = "Password must be at least 6 characters long.";

    setErrors(newErrors);
    if (newErrors.email || newErrors.password) return;

    try {
      if (!isSignInForm) {
        await createUserWithEmailAndPassword(auth, emailValue, passwordValue);
        alert("Signed Up Successfully!");
      } else {
        alert("Signed In Successfully!");
      }
      navigate("/browse");
    } catch {
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
          <InputField type="text" placeholder="Your name" valueRef={name} error={null} />
        )}

        <InputField type="text" placeholder="Email or phone number" valueRef={email} error={errors.email} />
        <PasswordField valueRef={password} error={errors.password} />

        {errors.invalid && <p className="text-red-500 text-sm text-center mb-3">{errors.invalid}</p>}

        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 transition-all py-3 rounded font-semibold mb-4"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <FormFooter isSignInForm={isSignInForm} toggleSignInForm={toggleSignInForm} />
      </form>
    </div>
  );
};

export default LoginForm;
