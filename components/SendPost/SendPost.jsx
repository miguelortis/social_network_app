import Divider from "../Divider/Divider";

const imageIcon = (
  <svg
    className="h-8 w-8 text-blue-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {" "}
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />{" "}
    <circle cx="8.5" cy="8.5" r="1.5" /> <polyline points="21 15 16 10 5 21" />
  </svg>
);
const videoIcon = (
  <svg
    className="h-8 w-8 text-blue-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {" "}
    <polygon points="23 7 16 12 23 17 23 7" />{" "}
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
);
const editIcon = (
  <svg
    className="h-8 w-8 text-blue-500"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {" "}
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />{" "}
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);
export default function SendPost({ userData }) {
  return (
    <div className="bg-white lg:rounded-[12px] p-1">
      <div className="m-4 flex">
        <div className="flex items-center px-2">
          <div className="flex min-w-0 gap-x-4">
            <img
              className="h-8 w-10 flex-none rounded-full bg-gray-50"
              src={userData?.profilePic}
              alt=""
            />
          </div>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          className="block rounded-3xl w-full h-8 border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder={`Qué estás pensando, ${userData.name}?`}
        />
      </div>
      <Divider style={{ width: "90%" }} />
      <div className="flex justify-left font-semibold font-bold">
        <div className="flex">
          <button className="ml-2 mr-2 flex items-center text-gray-400 rounded-full hover:bg-gray-100 px-2">
            {videoIcon}
            <span className="pl-2 hidden lg:block">Video</span>
          </button>

          <button className="ml-2 mr-2 flex items-center text-gray-400  rounded-full hover:bg-gray-100 px-2">
            {imageIcon}
            <span className="pl-2 hidden lg:block">Imágen</span>
          </button>

          <button className="ml-2 mr-2 flex items-center text-gray-400 rounded-full hover:bg-gray-100 px-2">
            {editIcon}
            <span className="pl-2 hidden lg:block">Relato</span>
          </button>
        </div>
      </div>
      <Divider style={{ width: "90%" }} />
    </div>
  );
}
