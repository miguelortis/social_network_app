import { useEffect, useRef, useState } from "react";
import Divider from "../Divider/Divider";
import "./Chat.css";
import { useLoggedUserStore } from "../../store/logged-user-store";

const closeIcon = (
  <svg
    className="h-8 w-8 text-blue-300"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {" "}
    <line x1="18" y1="6" x2="6" y2="18" />{" "}
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const minimizeIcon = (
  <svg
    className="h-8 w-8 text-blue-300"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {" "}
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
const arrowIcon = (
  <svg
    className="h-8 w-8 text-blue-400"
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
    <path stroke="none" d="M0 0h24v24H0z" /> <circle cx="12" cy="12" r="9" />{" "}
    <line x1="16" y1="12" x2="8" y2="12" />{" "}
    <line x1="16" y1="12" x2="12" y2="16" />{" "}
    <line x1="16" y1="12" x2="12" y2="8" />
  </svg>
);
const plusIcon = (
  <svg
    className="h-8 w-8 text-blue-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export default function Chat({
  setShowChat,
  showChat,
  friendInfo,
  setFriendInfo,
  setChats,
  setUsers,
}) {
  const userLoggedData = useLoggedUserStore((state) => state.userLoggedData)
  const chatBodyRef = useRef(null);

  const [message, setMessage] = useState("");
  const [rows, setRows] = useState(1);

  useEffect(() => {
    handleScrollChat();
  }, [friendInfo]);

  const handleScrollChat = () => {
    // Desplaza hacia abajo automáticamente al mensaje más nuevo
    chatBodyRef.current.scrollTop = chatBodyRef?.current?.scrollHeight;
  };
  const handleSubmit = () => {
    const newMessages = friendInfo?.messages?.length
      ? [...friendInfo?.messages, { user: userLoggedData?._id, message: message }]
      : [{ user: userLoggedData?._id, message: message }];

    setFriendInfo((prev) => ({ ...prev, messages: newMessages }));
    setUsers((prev) =>
      prev.map((user) =>
        user._id === friendInfo._id ? { ...user, messages: newMessages } : user
      )
    );
    setRows(1);
    setMessage("");
    handleScrollChat();
  };
  const handleInputChange = (event) => {
    if (/^\n/.test(event.target.value)) {
      return;
    }
    if (event.code === "Enter" && !event.shiftKey && message) {
      event.preventDefault();
      // Si se presionó "Enter", resetea el contenido del textarea
      handleSubmit();
    } else {
      const textareaLineHeight = 20; // Ajusta esto según tus estilos CSS
      const minRows = 1;
      const maxRows = 5;

      const previousRows = event.target.rows;
      event.target.rows = minRows; // Restablece a una fila para calcular el scrollHeight
      const currentRows = Math.floor(
        event.target.scrollHeight / textareaLineHeight
      );

      if (currentRows === previousRows) {
        event.target.rows = currentRows;
      }

      if (currentRows >= maxRows) {
        event.target.rows = maxRows;
        event.target.scrollTop = event.target.scrollHeight;
      }

      setMessage(event.target.value);
      setRows(currentRows);
    }
  };

  return (
    showChat && (
      <div className="container-chat">
        <div className="chat-h-b-f">
          <div className="c-h-chat px-2 pt-2">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="flex min-w-0 ">
                  <img
                    className="h-11 w-11 flex-none rounded-full bg-gray-50"
                    src={friendInfo?.profilePic}
                    alt=""
                  />
                </div>
              </div>
              <span className="px-2">{`${friendInfo.name} ${friendInfo.lastName}`}</span>
            </div>
            <div>
              <button
                className="hover:bg-gray-100 rounded-3xl"
                onClick={() => [
                  setShowChat(false),
                  setChats((prev) => [...prev, friendInfo]),
                ]}
              >
                {minimizeIcon}
              </button>
              <button
                className="hover:bg-gray-100 rounded-3xl"
                onClick={() => setShowChat(false)}
              >
                {closeIcon}
              </button>
            </div>
          </div>
          <Divider />
          <div className="c-m-s">
            <div id="chat" className="chat-body" ref={chatBodyRef}>
              {friendInfo?.messages?.map((item, i) => {
                if (item.user === friendInfo._id) {
                  return (
                    <div key={i} className="m-left">
                      <div className="flex items-center ml-2">
                        <div className="flex min-w-0 gap-x-4">
                          <img
                            className="h-8 w-8 flex-none rounded-full bg-gray-50"
                            src={friendInfo?.profilePic}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="message">
                        <pre>{item.message}</pre>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div key={i} className="m-right">
                      <div className="message">
                        <pre>{item.message}</pre>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
            <div className="flex px-2 items-end">
              <button className="hover:bg-gray-100 rounded-3xl mb-2">
                {plusIcon}
              </button>
              <div className="relative flex w-full items-end">
                <textarea
                  value={message}
                  onChange={handleInputChange}
                  onKeyDown={handleInputChange}
                  placeholder="Escribe aquí..."
                  rows={rows}
                  className="textArea"
                  autoComplete="off"
                  autoFocus
                />
                <button className="hover:bg-gray-100 rounded-3xl mb-2">
                  {arrowIcon}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
