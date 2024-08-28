"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import "./styles.css";

export default function Home() {
  const router = useRouter();

  const redirectToLogin = () => {
    router.push("/login");
  };

  useEffect(() => {
    redirectToLogin();
  }, []);

  return (
    <>
      <h1>HOME</h1>
    </>
  );
}
