import Avatar from '../Avatar/Avatar'
import Skeleton from '../Skeleton/Skeleton'
import { useAuth } from '../../hooks/stores/useAuth'

export default function UserProfilePic() {
  const { loggedUser } = useAuth()

  return (
    <div className='flex items-center pt-4 pb-4'>
      <div className='flex min-w-0 gap-x-4'>
        <Avatar src={loggedUser?.avatar} className='h-12 w-12' />
      </div>
      <div className='shrink-0 sm:flex sm:flex-col px-2'>
        <div className='min-w-0 flex-auto'>
          {loggedUser?.name && loggedUser?.lastName ? (
            <p className='text-sm font-semibold leading-6 text-gray-900'>
              {loggedUser?.name || ''} {loggedUser?.lastName || ''}
            </p>
          ) : (
            <Skeleton variant='text' width={120} height={20} />
          )}
        </div>
      </div>
    </div>
  )
}
