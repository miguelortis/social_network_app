import { useRef, useState } from "react";
import Divider from "../Divider/Divider";
import SendComment from "../SendComment/SendComment";
import { useRouter } from "next/navigation";

const likeIcon = (
  <svg
    className="h-5 w-5 text-blue-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);
const likeIconGray = (
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
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

const commentIcon = (
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
    <path stroke="none" d="M0 0h24v24H0z" />{" "}
    <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />{" "}
    <line x1="12" y1="12" x2="12" y2="12.01" />{" "}
    <line x1="8" y1="12" x2="8" y2="12.01" />{" "}
    <line x1="16" y1="12" x2="16" y2="12.01" />
  </svg>
);

const commentIconGray = (
  <svg
    className="h-8 w-8 text-gray-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {" "}
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export default function Post({ data, userData }) {
  const router = useRouter();
  const commentRef = useRef(null);

  const [showSendComment, setShowSendComment] = useState(false);
  return (
    <div className="bg-white lg:rounded-[12px] p-1 mt-3 mb-3">
      <div className="px-4 pb-4">
        <div className="flex items-center pt-4 pb-4">
          <div className="flex min-w-0 gap-x-4 ">
            <img
              className="h-12 w-12 flex-none rounded-full bg-gray-50 hover:cursor-pointer hover:border-solid hover:border-2 hover:border-black"
              src={data?.user?.profilePic}
              alt=""
              onClick={() => router.push(`/account/profile/${data?.user?._id}`)}
            />
          </div>
          <div className="shrink-0 sm:flex sm:flex-col px-4">
            <div className="min-w-0 flex-auto ">
              <p
                className="text-sm font-semibold leading-6 text-gray-900 hover:cursor-pointer hover:underline"
                onClick={() =>
                  router.push(`/account/profile/${data?.user?._id}`)
                }
              >
                {`${data?.user?.name} ${data?.user?.lastName}`}
              </p>
              <span className="text-gray-500 text-xs">4h</span>
            </div>
          </div>
        </div>
        <div className="text-gray-500">
          <p className="text-left">{data.post.comment}</p>
        </div>
        {data?.post?.image && (
          <div className="text-gray-500">
            <img src={data?.post?.image} />
          </div>
        )}
      </div>
      <div className="px-4 flex justify-between">
        <div className="flex items-center">
          {likeIcon}
          <span className="text-gray-300 text-xs px-1">1.5 mil</span>
        </div>
        <div className="flex items-center">
          {commentIcon}
          <span className="text-gray-300 text-xs px-1">45</span>
        </div>
      </div>
      <Divider style={{ width: "95%" }} />
      {/* like and comment buttons */}
      <div className="flex justify-evenly items-center py-1 ">
        <button className="flex items-center hover:bg-gray-100 rounded-3xl p-1">
          {likeIconGray}
          <span className="text-gray-400 text-sm">Me gusta</span>
        </button>
        <button
          className="flex items-center hover:bg-gray-100 rounded-3xl p-1"
          onClick={() => [
            setShowSendComment(true),
            commentRef?.current?.focus(),
          ]}
        >
          {commentIconGray}
          <span className="text-gray-400 text-sm">Comentar</span>
        </button>
      </div>
      <Divider style={{ width: "95%" }} />
      {/* add comment component */}
      {showSendComment && (
        <SendComment userData={userData} commentRef={commentRef} />
      )}
    </div>
  );
}
