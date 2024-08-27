export default function Contact({
  contact,
  setShowChat,
  setFriendInfoForChat,
  setChats,
}) {
  const handleContactSelect = () => {
    setShowChat(true), setFriendInfoForChat(contact);
    setChats((prev) => prev.filter((item) => item._id !== contact._id));
  };
  return (
    <li
      className="flex gap-x-6 py-2 mr-3 hover:cursor-pointer hover:bg-gray-100 px-2"
      onClick={handleContactSelect}
    >
      <div className="flex min-w-0 gap-x-4">
        <img
          className="h-12 w-12 flex-none rounded-full bg-gray-50"
          src={contact.profilePic}
          alt=""
        />
      </div>
      <div className="shrink-0 sm:flex sm:flex-col ">
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {`${contact.name} ${contact.lastName}`}
          </p>
        </div>
        {contact.online ? (
          <div className="mt-1 flex items-center gap-x-1.5">
            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
            </div>
            <p className="text-xs leading-5 text-gray-500">Online</p>
          </div>
        ) : (
          <p className="mt-1 text-xs leading-5 text-gray-500">
            Last seen 3h ago
          </p>
        )}
      </div>
    </li>
  );
}
