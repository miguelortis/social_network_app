"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import SuscriptionModal from "./SuscriptionModal";
import "./header.css";

const sharedIcon = (
  <svg
    className="h-5 w-5 text-blue-400"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {" "}
    <path stroke="none" d="M0 0h24v24H0z" /> <circle cx="6" cy="12" r="3" />{" "}
    <circle cx="18" cy="6" r="3" /> <circle cx="18" cy="18" r="3" />{" "}
    <line x1="8.7" y1="10.7" x2="15.3" y2="7.3" />{" "}
    <line x1="8.7" y1="13.3" x2="15.3" y2="16.7" />
  </svg>
);
const starIcon = (
  <svg
    className="h-5 w-5 text-blue-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {" "}
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const arrowLeftIcon = (
  <svg
    className="h-6 w-6 text-white-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {" "}
    <line x1="19" y1="12" x2="5" y2="12" />{" "}
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const suggestions = [
  {
    _id: "asda76asd86a456d9a333sdi",
    name: "Marcos Daniel",
    lastName: "Mariño Díaz",
    profilePic:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    coverPhoto:
      "https://concepto.de/wp-content/uploads/2019/02/paisaje-natural-portada.jpg",
    userName: "marco.dani",
    nickname: "Marcos Daniel",
  },
  {
    _id: "asda76asd8fjd856adkasdi",
    name: "Rey Frank",
    lastName: "Lugo Jimenez",
    profilePic:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    coverPhoto:
      "https://thumbs.onlyfans.com/public/files/thumbs/w480/w/w5/w5h/w5hceruihd3cfn2uohxdqoaupoq3zaoi1705447775/175877260/header.jpg",
    userName: "reyfr",
    nickname: "Rey Frank",
  },
  {
    _id: "asda790sdo34asd9adkasdi",
    name: "Juan David",
    lastName: "Hernández Sanchez",
    profilePic:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",

    coverPhoto:
      "https://thumbs.onlyfans.com/public/files/thumbs/w480/e/e7/e7u/e7ub1by8h4rmthsie5xeude8u3k87lxf1675702992/127458895/header.jpg",
    userName: "juanda",
    nickname: "Juan David",
  },
  {
    _id: "asda76asd8043jf9adkasdi",
    name: "Rene",
    lastName: "Chirinos",
    profilePic:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",

    coverPhoto:
      "https://thumbs.onlyfans.com/public/files/thumbs/w480/e/e7/e7u/e7ub1by8h4rmthsie5xeude8u3k87lxf1675702992/127458895/header.jpg",
    userName: "rench",
    nickname: "Rene",
  },
];

export default function Header() {
  const { user } = useParams();
  const router = useRouter();
  const [userSelected, setUserSelected] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setUserSelected(suggestions.find((item) => item._id === user));
  }, [suggestions]);

  return (
    <div>
      <div className="h-card-container">
        <div className="h-card">
          {/* card elements */}
          <div className="relative">
            <div className="h-user-cover-wrapper">
              <img src={userSelected?.coverPhoto} />
            </div>
            <div className="h-content">
              <div className="h-nickname">
                <div
                  className="h-nick-name hover:cursor-pointer mr-2"
                  onClick={() => router.push("/account")}
                >
                  {arrowLeftIcon}
                </div>
                <div className="h-nick-name">{userSelected?.nickname}</div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex w-full h-16">
                <div className="h-avatar w-1/4">
                  <div className="img-wrapper">
                    <img src={userSelected?.profilePic} />
                  </div>
                </div>
                <div className="w-3/4 flex justify-end mr-4">
                  <button className="h-button">{starIcon}</button>
                  <button className="h-button">{sharedIcon}</button>
                </div>
              </div>
              <div className="h-username mt-3.5 ml-5">
                <span>{userSelected?.nickname}</span>
                <span className="h-user-name">{`@${userSelected?.userName}`}</span>
              </div>
            </div>
          </div>
          {/* card menu */}
        </div>
      </div>
      <div className="flex flex-col mt-2 suscription">
        <span>SUSCRIPCIÓN</span>
        <div className="btn-suscription">
          <button
            onClick={() => setOpenModal(true)}
            className="flex justify-between"
          >
            <span>Suscríbete</span>
            <span>Gratis</span>
          </button>
        </div>
      </div>
      <SuscriptionModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        userSelected={userSelected}
      />
    </div>
  );
}
