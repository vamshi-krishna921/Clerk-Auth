import React from "react";
import { SignIn } from "@clerk/clerk-react";

function Login() {
  return (
    <div className="w-full h-[100vh] overflow-hidden flex justify-center items-center">
      <SignIn />
    </div>
  );
}

export default Login;
