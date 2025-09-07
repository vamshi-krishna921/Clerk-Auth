import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import AppRoutes from "./AppRoutes";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";

function App() {
  const location = useLocation();
  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="w-full min-h-screen bg-gray-200">
      {/* <SignedIn> */}
        {!hideNavbar && <Navbar />}
        <div className="p-4">
          <AppRoutes />
        </div>
      {/* </SignedIn> */}
      {/* <SignedOut> */}
        {/* <RedirectToSignIn redirectUrl="/login"/> */}
      {/* </SignedOut> */}
    </div>
  );
}

export default App;
