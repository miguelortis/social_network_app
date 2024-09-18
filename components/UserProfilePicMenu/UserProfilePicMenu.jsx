import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaChevronDown } from 'react-icons/fa'
import { TbLogout, TbSettings } from 'react-icons/tb'
import { useLoggedUserStore } from '../../store/logged-user-store'
import CustomMenu from '../../components/CustomMenu/CustomMenu'
import Divider from '../Divider/Divider'
import Avatar from '../Avatar/Avatar'

export default function UserProfilePicMenu() {
  const router = useRouter()
  const menuRef = useRef(null)
  const userLoggedData = useLoggedUserStore((state) => state.userLoggedData)

  const [isOpen, setIsOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }
  const handleEscape = (event) => {
    if (event.key === 'Escape') {
      setIsOpen(false)
    }
  }

  return (
    <>
      <div className='relative inline-block text-left' ref={menuRef}>
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className='cursor-pointer flex items-center hover:opacity-80 rounded-full'
        >
          <Avatar
            src={userLoggedData?.avatar}
            className='h-11 w-11'
            alt='Profile Picture'
          />
          <FaChevronDown className='text-gray-500 absolute right-0 bottom-[-3px] bg-black rounded-full border-[#a8d4fc] border-2 border-solid' />
        </div>
      </div>
      <CustomMenu open={openMenu} onClose={(e) => setOpenMenu(e)}>
        <a className='px-4 py-2 w-52 text-gray-700 hover:bg-gray-100 flex items-center cursor-pointer'>
          <Avatar
            src={userLoggedData?.avatar}
            className='h-9 w-9 mr-2'
            alt='Profile Picture'
          />
          {`${userLoggedData.name || ''} ${userLoggedData.lastName || ''}`}
        </a>
        <Divider />
        <a className='px-4 py-2 w-52 text-gray-700 hover:bg-gray-100 flex items-center cursor-pointer'>
          <TbSettings className='w-5 h-5 mr-2' />
          Configuracion
        </a>
        <a
          className='px-4 py-2 w-52 text-gray-700 hover:bg-gray-100 flex items-center cursor-pointer'
          onClick={() => {
            document.cookie =
              'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
            router.push('/login')
          }}
        >
          <TbLogout className='w-5 h-5 mr-2' />
          Cerrar Sesión
        </a>
      </CustomMenu>
    </>
  )
}
