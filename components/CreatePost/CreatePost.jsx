'use client'

import { useState } from 'react'
import { IoMdImages } from 'react-icons/io'
import { BiEdit } from 'react-icons/bi'
import { HiOutlineVideoCamera } from 'react-icons/hi2'
import Divider from '../Divider/Divider'
import Avatar from '../Avatar/Avatar'
import CustomButtom from '../CustomButtom/CustomButtom'
import CustomTooltip from '../CustomTooltip/CustomTooltip'
import CreatePostModal from './components/CreatePostModal'
import { useAuth } from '../../hooks/stores/useAuth'

export default function CreatePost() {
  const { loggedUser } = useAuth()

  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='bg-white lg:rounded-[12px] p-1'>
      <div className='m-4 flex items-center'>
        <div className='flex items-center px-2'>
          <Avatar src={loggedUser?.avatar} />
        </div>
        <input
          onClick={() => setOpenModal(true)}
          readOnly
          type='text'
          name='price'
          id='price'
          className='rounded-3xl w-full h-8 border-none outline-none py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:bg-[#d3d3d342]'
          placeholder={`Qué estás pensando, ${loggedUser?.name || ''}?`}
        />
      </div>
      <Divider style={{ width: '90%' }} />
      <div className='flex justify-left font-semibold font-bold'>
        <div className='flex justify-center w-full'>
          <CustomTooltip title='Video'>
            <CustomButtom
              iconButton
              className='p-2 mx-2 flex items-center text-gray-400  rounded-full hover:bg-gray-100'
            >
              <HiOutlineVideoCamera className='h-8 w-8 text-blue-400' />
            </CustomButtom>
          </CustomTooltip>
          <CustomTooltip title='Foto/Imagen'>
            <CustomButtom
              iconButton
              className='p-2 mx-2 flex items-center text-gray-400  rounded-full hover:bg-gray-100'
            >
              <IoMdImages className='h-8 w-8 text-blue-400' />
            </CustomButtom>
          </CustomTooltip>
          <CustomTooltip title='Relato'>
            <CustomButtom
              iconButton
              className='p-2 mx-2 flex items-center text-gray-400  rounded-full hover:bg-gray-100'
            >
              <BiEdit className='h-8 w-8 text-blue-400' />
            </CustomButtom>
          </CustomTooltip>
        </div>
      </div>
      <Divider style={{ width: '90%' }} />
      {openModal && (
        <CreatePostModal
          onClose={() => setOpenModal(false)}
          openModal={openModal}
          userData={loggedUser}
        />
      )}
    </div>
  )
}
