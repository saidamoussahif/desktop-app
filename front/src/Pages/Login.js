import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };


  const onSubmit = async (e) => {

    e.preventDefault();
    const userData = {
      email,
      password,
    };
    const response = await fetch("http://localhost: 5000/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    if (data.token) {
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("userToken", data.token);
      localStorage.setItem("email", data.email);
      localStorage.setItem("id", data._id);
      navigate("/dashboard");
    }
  };


  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div>
        <h1 className="mb-1 font-bold text-3xl flex gap-1 items-baseline font-mono">
          Welcome back to your account!!
        </h1>
        <div className="grid max-w-3xl gap-2 py-10 px-8 sm:grid-cols-2 bg-white rounded-md border-t-4 border-purple-400">
          <form onSubmit={(e) => onSubmit(e)}>
          <div className="grid">
            <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
              <input
                type="email"
                onChange={onChange}
                value={email}
                name="email"
                id="email"
                className="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0"
                placeholder="E-mail"
              />
              <label
                html="email"
                className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0"
              >
                E-mail
              </label>
            </div>
          </div>
          <div className="grid">
            <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
              <input
                type="password"
                onChange={onChange}
                value={password}
                name="password"
                id="password"
                className="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0"
                placeholder="password"
              />
              <label
                html="password"
                className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0"
              >
                Password
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 "
          >
            Login
          </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
