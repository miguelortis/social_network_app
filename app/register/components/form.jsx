"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "../../../config/axios";

function Home() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

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
      //localStorage.setItem("token", res.data.token);
      router.push("/panel/home");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) =>
            setCredentials({
              ...credentials,
              email: e.target.value,
            })
          }
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) =>
            setCredentials({
              ...credentials,
              password: e.target.value,
            })
          }
        />
        <button>Save</button>
      </form>
    </div>
  );
}

export default Home;
