import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      if (storedUser.email === email && storedUser.password === password) {
        login();
        navigate("/");
      } else {
        setMessage("Invalid email or password.");
      }
    } else {
      setMessage("User not found. Please sign up.");
    }
  };

  return (
    <form>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="text-gray-700 font-mono ring-1 w-full ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-gray-700 placeholder:opacity-50  px-4 py-2 shadow-sm rounded-full focus:shadow-lg focus:shadow-rose-400"
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="text-gray-700 font-mono ring-1 w-full ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-gray-700 placeholder:opacity-50  px-4 py-2 mb-3 shadow-sm rounded-full focus:shadow-lg focus:shadow-rose-400"
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {message && (
        <p className="text-red-600 font-semibold text-md italic mb-4">
          {message}
        </p>
      )}
      <div className="flex items-center justify-between">
        <button
          className="bg-rose-500 hover:bg-rose-400 text-white font-bold py-2 px-4 mx-auto rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </form>
  );
}
