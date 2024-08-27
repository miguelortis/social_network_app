import './chatList.css'

export default function ChatList({chats, setChats, setShowChat, setFriendInfoForChat}) {

    const handleShowChat = (chat) => {
        setShowChat(true)
        setFriendInfoForChat(chat)
        setChats(prev=> prev.filter(item=> item._id !== chat._id))
    }
    return(
        <div className="c-chat-list">
            {chats?.reverse().map((chat)=>{
             return  ( 
             <div key={chat._id} className="flex items-center m-2 hover:cursor-pointer" onClick={()=>handleShowChat(chat)}>
                <div className="flex min-w-0 gap-x-4">
                  <img
                    className="h-11 w-11 flex-none rounded-full bg-gray-50"
                    src={chat?.profilePic}
                    alt=""
                  />
                </div>
              </div>)
            })}
        </div>
    )
}