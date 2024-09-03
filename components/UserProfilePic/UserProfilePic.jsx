import { useLoggedUserStore } from "../../store/logged-user-store";

export default function UserProfilePic({ userData }) {
  const userLoggedData = useLoggedUserStore((state) => state.userLoggedData);

  return (
    <div className="flex items-center pt-4 pb-4">
      <div className="flex min-w-0 gap-x-4">
        <img
          className="h-12 w-12 flex-none rounded-full bg-gray-50"
          src={userData?.profilePic}
          alt=""
        />
      </div>
      <div className="shrink-0 sm:flex sm:flex-col px-4">
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {`${userLoggedData.name || ""} ${userLoggedData.lastName || ""}`}
          </p>
        </div>
      </div>
    </div>
  );
}
