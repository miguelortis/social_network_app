import { FaUserCircle } from 'react-icons/fa'

export default function Avatar({ src, className }) {
  return (
    <div className='flex min-w-0 gap-x-4'>
      {src ? (
        <img
          className={`h-10 w-10 flex-none rounded-full bg-gray-50 ${className}`}
          src={src}
          alt='Profile Picture'
        />
      ) : (
        <FaUserCircle className={`h-10 w-10 text-gray-300 ${className}`} />
      )}
    </div>
  )
}
