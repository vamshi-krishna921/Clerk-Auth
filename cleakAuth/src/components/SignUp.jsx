import React from "react";
import { SignUp } from "@clerk/clerk-react";

function SignUpPage() {
  return (
    <div className="w-full h-[100vh] flex overflow-hidden justify-center items-center">
      <SignUp signInUrl="/login" forceRedirectUrl={"/home"}/>
    </div>
  );
}

export default SignUpPage;
