"use client";

import Header from "../../../components/Profile/Header";

export default function RootLayout({ children }) {
  return (
    <div className="grid grid-cols-1 gap-x-4 grid-rows-1">
      <div className="col-span-1 mt-2">
        <Header />
      </div>
      <div className="col-span-1 mt-2">{children}</div>
    </div>
  );
}
