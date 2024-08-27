import UserProfilePicMenu from "../UserProfilePicMenu/UserProfilePicMenu";
import "./styles/header.css";

const menuIcon = (
  <svg
    className="h-8 w-8 text-black"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

export default function Header({ setMobileFiltersOpen, userData }) {
  return (
    <div className="header px-4 flex items-baseline items-center lg:justify-between  border-b border-gray-200 pb-3 pt-3">
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 w-full">
        <div className="w-full lg:col-span-1 flex items-center">
          <div className="flex items-center">
            <button
              type="button"
              className="-m-2 p-2 text-gray-400 hover:text-gray-500 lg:hidden pr-5"
              onClick={() => setMobileFiltersOpen(true)}
            >
              {menuIcon}
            </button>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            <img src="logo.png" width="60" />
          </h1>
        </div>
        <div className="w-full flex items-center lg:col-span-1 ">
          <div className="relative mt-2 w-full rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-black"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <circle cx="11" cy="11" r="8" />{" "}
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <input
              type="text"
              name="buscador"
              id="buscador"
              className="block rounded-2xl w-full border-0 py-1.5 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Buscar contenido..."
            />
          </div>
        </div>
        <div className="w-full flex  pl-4 mt-4 justify-start md:justify-end items-center lg:col-span-1">
          <button className="mr-5">
            <svg
              className="h-8 w-8 rounded-full text-black bg-blue-100 border-2 border-blue-100"
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
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />{" "}
              <line x1="12" y1="11" x2="12" y2="11.01" />{" "}
              <line x1="8" y1="11" x2="8" y2="11.01" />{" "}
              <line x1="16" y1="11" x2="16" y2="11.01" />
            </svg>
          </button>
          <button className="mr-5">
            <svg
              className="h-8 w-8 rounded-full text-black bg-blue-100 border-2 border-blue-100"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />{" "}
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </button>
          <UserProfilePicMenu userData={userData} />
        </div>
      </div>
    </div>
  );
}
