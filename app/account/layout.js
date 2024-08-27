"use client";

import Layout from "../../components/Layout/Layout";

export default function RootLayout({ children }) {
  return (
    <Layout>
      <div className="col-span-1 mt-2">{children}</div>
    </Layout>
  );
}
