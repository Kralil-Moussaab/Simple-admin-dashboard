import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const MainForm = () => {
  const [view, setView] = useState("login");

  const handleSwitchView = () => {
    setView(view === "login" ? "signup" : "login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-900">
      <div className="bg-white shadow-lg shadow-neutral-600 rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-red-500 mb-6 text-center">
          {view === "login" ? "Login" : "Sign Up"}
        </h2>
        {view === "login" && <Login />}
        {view === "signup" && <SignUp />}
        <div className="text-center mt-6">
          <p>
            {view === "login"
              ? "Don't have an account?"
              : "Already have an account?"}
            <button
              onClick={handleSwitchView}
              className="text-rose-400 font-bold hover:underline ml-2"
            >
              {view === "login" ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainForm;
