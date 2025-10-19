import React from "react";

const InputField = ({ type = "text", placeholder, valueRef, error }) => {
  return (
    <div className="mb-3">
      <input
        ref={valueRef}
        type={type}
        placeholder={placeholder}
        className={`p-4 bg-[#333] rounded focus:outline-none focus:ring-2 w-full ${
          error ? "focus:ring-red-700 border border-red-600" : "focus:ring-red-600"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
