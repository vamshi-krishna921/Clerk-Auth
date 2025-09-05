import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import AppRoutes from "./AppRoutes";

function App() {
  const location = useLocation(); // get current route
  const hideNavbar = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="w-full min-h-screen bg-gray-200">
      {!hideNavbar && <Navbar />}  {/* hide Navbar on login/signup */}
      <div className="p-4">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
