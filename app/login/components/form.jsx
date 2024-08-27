"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "../../../config/axios";

function Home() {
  const router = useRouter();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState("password");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    const res = await axios.post("auth/login", credentials, headers);
    if (res.status === 200) {
      console.log(res);
      document.cookie = `token=${res.data.token}; path=/; max-age=2592000`; // 30 días
      router.push("/account");
    }
  };
  const handleShowPassword = () => {
    setShowPassword(showPassword === "password" ? "text" : "password");
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-72">
        <form onSubmit={handleSubmit}>
          <div className="mb-2 mt-5">
            <span className="f-l-title">Iniciar Sesion</span>
          </div>
          <div className="mb-5 mt-2">
            <label className="relative block">
              <input
                autoFocus
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Correo"
                required
                type="email"
                name="email"
                onChange={(e) =>
                  setCredentials({
                    ...credentials,
                    email: e.target.value,
                  })
                }
              />
            </label>
          </div>
          <div className="mb-5 mt-5">
            <label className="relative block">
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-8 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Contraseña"
                required
                type={showPassword}
                name="password"
                onChange={(e) =>
                  setCredentials({
                    ...credentials,
                    password: e.target.value,
                  })
                }
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                <button
                  type="button"
                  className="hover:bg-slate-100 rounded-full"
                >
                  {showPassword === "text" ? (
                    <AiFillEyeInvisible
                      onClick={handleShowPassword}
                      className="h-5 w-5 fill-slate-300"
                    />
                  ) : (
                    <AiFillEye
                      onClick={handleShowPassword}
                      className="h-5 w-5 fill-slate-300"
                    />
                  )}
                </button>
              </span>
            </label>
          </div>
          <div className="mb-5 mt-5">
            <button
              type="submit"
              className="w-full text-white px-4 py-2 bg-blue-500/50 hover:bg-blue-500 rounded-full uppercase"
            >
              Iniciar Sesion
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
