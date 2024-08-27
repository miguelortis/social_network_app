"use client";

import Content from "../../components/Content/Content";
import "../styles.css";

const currentUser = {
  _id: "asda76asd865asd9adkasdi",
  name: "Rene",
  lastName: "Chirinos",
  profilePic:
    "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

export default function Dashboard() {
  return (
    <>
      {/* Content */}

      <div className="lg:col-span-2 content mt-2">
        <Content currentUser={currentUser} />
      </div>
    </>
  );
}
