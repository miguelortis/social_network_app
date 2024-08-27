import { useEffect, useState } from "react";
import Divider from "../Divider/Divider";
import Contact from "../Contact/Contact";

const usersIcon = (
  <svg
    className="h-8 w-8 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

const searchIcon = (
  <svg
    className="h-6 w-6 text-blue-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

function compareOnlineStatus(a, b) {
  if (a.online && !b.online) {
    return -1; // a va antes que b
  } else if (!a.online && b.online) {
    return 1; // b va antes que a
  } else {
    return 0; // misma condición, no cambia el orden
  }
}

export default function ContactList({
  users,
  setShowChat,
  setFriendInfoForChat,
  setChats,
}) {
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    setUserList(
      users.filter((user) =>
        `${user.name} ${user.lastName}`
          .toLowerCase()
          .includes(search.toLowerCase())
      )
    );
  }, [search, users]);

  return (
    <div className="lg:col-span-1 chats-container hidden lg:block">
      <div>
        <Divider style={{ width: "95%" }} />
        <div
          className="flex px-2 items-center justify-between"
          onClick={() => setShowSearch(!showSearch)}
        >
          <div className="flex px-2 items-center">
            {usersIcon}
            <span className="px-2 text-gray-400">Contactos</span>
          </div>
          <button className="hover:bg-gray-200 rounded-3xl p-1">
            {searchIcon}
          </button>
        </div>
        {showSearch && (
          <div className="m-2">
            <input
              autoFocus
              type="text"
              name="price"
              id="price"
              className="block rounded-3xl w-full h-7 border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:border-white-600"
              placeholder={`Buscar contacto...`}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        )}
        <Divider style={{ width: "95%" }} />
      </div>
      <ul role="list" className="divide-y divide-gray-100">
        {search && !userList.length ? (
          <div className="w-full flex justify-center">
            <span className="text-gray-400">Sin Resultados</span>
          </div>
        ) : (
          userList?.sort(compareOnlineStatus)?.map((user) => {
            return (
              <Contact
                key={user._id}
                contact={user}
                setShowChat={setShowChat}
                setFriendInfoForChat={setFriendInfoForChat}
                setChats={setChats}
              />
            );
          })
        )}
      </ul>
    </div>
  );
}
