import React from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <img
        src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-650-80.jpg.webp"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />


      {/* Header */}
      <div className="relative z-10">
        <Header />
      </div>

      {/* Login Form Component */}
      <LoginForm />
    </div>
  );
};

export default Login;
