import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const PasswordField = ({ valueRef, error, placeholder = "Password" }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative mb-3">
      <input
        ref={valueRef}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        className={`p-4 bg-[#333] rounded focus:outline-none focus:ring-2 w-full pr-10 ${
          error ? "focus:ring-red-700 border border-red-600" : "focus:ring-red-600"
        }`}
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white"
      >
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default PasswordField;
