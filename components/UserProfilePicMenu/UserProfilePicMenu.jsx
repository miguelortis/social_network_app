import { useRouter } from "next/navigation";

export default function UserProfilePicMenu({ userData }) {
  const router = useRouter();
  return (
    <div className="flex items-center">
      <div
        className="flex min-w-0 gap-x-4 cursor-pointer"
        onClick={() => {
          document.cookie =
            "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          router.push("/login");
        }}
      >
        <img
          className="h-11 w-11 flex-none rounded-full bg-gray-50"
          src={userData?.profilePic}
          alt=""
        />
      </div>
    </div>
  );
}
