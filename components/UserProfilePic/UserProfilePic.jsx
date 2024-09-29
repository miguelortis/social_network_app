import Avatar from '../Avatar/Avatar'
import Skeleton from '../Skeleton/Skeleton'
import { useLoggedUserStore } from '../../store/logged-user-store'

export default function UserProfilePic() {
  const loggedUserData = useLoggedUserStore((state) => state.loggedUserData)

  return (
    <div className='flex items-center pt-4 pb-4'>
      <div className='flex min-w-0 gap-x-4'>
        <Avatar src={loggedUserData?.profilePic} className='h-12 w-12' />
      </div>
      <div className='shrink-0 sm:flex sm:flex-col px-2'>
        <div className='min-w-0 flex-auto'>
          {loggedUserData?.name && loggedUserData?.lastName ? (
            <p className='text-sm font-semibold leading-6 text-gray-900'>
              {loggedUserData?.name || ''} {loggedUserData?.lastName || ''}
            </p>
          ) : (
            <Skeleton variant='text' width={120} height={20} />
          )}
        </div>
      </div>
    </div>
  )
}
