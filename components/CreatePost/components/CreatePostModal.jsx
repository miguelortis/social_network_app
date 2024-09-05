import { useRef, useState } from 'react'
import { TbX } from 'react-icons/tb'
import { IoMdImages } from 'react-icons/io'
import { MdOutlineEmojiEmotions } from 'react-icons/md'
import Modal from '../../Modal/Modal'
import Divider from '../../Divider/Divider'
import CustomButtom from '../../CustomButtom/CustomButtom'
import CustomTooltip from '../../CustomTooltip/CustomTooltip'
import Avatar from '../../Avatar/Avatar'
import CustomInputMention from '../../CustomInputMention/CustomInputMention'

export default function CreatePostModal({ openModal, onClose, userData }) {
  const container = useRef(null)
  const [data, setData] = useState({ content: '' })
  return (
    <Modal open={openModal} onClose={onClose}>
      <div className='w-[400px]'>
        <div className='h-card-container'>
          <div>
            <div className='relative'>
              <div className='flex flex-col'>
                <div className='flex w-full h-12'>
                  <div className='w-[80%] flex items-center justify-center'>
                    <span> Crear Publicación</span>
                  </div>
                  <div className='w-[20%] items-center flex justify-center'>
                    <button
                      className='bg-gray-100 hover:bg-gray-200 rounded-full p-1'
                      onClick={onClose}
                    >
                      <TbX className='w-5 h-5' />
                    </button>
                  </div>
                </div>
                <Divider />
                <div className='flex items-center px-2'>
                  <Avatar src={userData?.avatar} className='mr-2' />
                  <div>
                    <span className='text-sm font-semibold leading-6 text-gray-900'>
                      {`${userData?.name || ''} ${userData?.lastName || ''}`}
                    </span>
                  </div>
                </div>
                <div
                  className='px-2 w-full max-h-[300px] overflow-y-auto c-mention-input'
                  ref={container}
                >
                  <CustomInputMention
                    placeholder={`Que estas pensando, ${userData?.name || ''}?`}
                    value={data.content}
                    suggestionsPortalHost={container.current}
                    allowSuggestionsAboveCursor={true}
                    onChange={(
                      event,
                      newValue,
                      newPlainTextValue,
                      mentions
                    ) => {
                      setData((prev) => ({ ...prev, content: newValue }))
                      console.log(
                        'event:',
                        event,
                        'newValue:',
                        newValue,
                        'newPlainTextValue:',
                        newPlainTextValue,
                        'mentions:',
                        mentions
                      )
                    }}
                    dataContacts={[
                      {
                        id: 134,
                        display: 'pedro arguelles',
                      },
                      { id: 134, display: 'Martin' },
                      { id: 134, display: 'Jacob' },
                      { id: 134, display: 'Javier' },
                      { id: 134, display: 'Vasu' },
                      { id: 134, display: 'Lautaro' },
                    ]}
                  />
                </div>
                <div className='mx-4 flex'>
                  <CustomTooltip title='Foto/Video'>
                    <CustomButtom
                      className='mx-[2px]'
                      iconButton
                      onClick={() => onClose(false)}
                    >
                      <IoMdImages className='w-6 h-6' />
                    </CustomButtom>
                  </CustomTooltip>
                  <CustomTooltip title='Foto/Video'>
                    <CustomButtom
                      className='mx-[2px]'
                      iconButton
                      onClick={() => onClose(false)}
                    >
                      <MdOutlineEmojiEmotions className='w-6 h-6' />
                    </CustomButtom>
                  </CustomTooltip>
                </div>
                <div className='flex m-2 justify-center items-center'>
                  <CustomButtom onClick={() => onClose(false)}>
                    Publicar
                  </CustomButtom>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}