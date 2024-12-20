import { useEffect, useRef, useState } from 'react'
import { TbX } from 'react-icons/tb'
import { IoMdImages } from 'react-icons/io'
import { MdOutlineEmojiEmotions } from 'react-icons/md'
import axios from '../../../config/axios'
import Modal from '../../Modal/Modal'
import Divider from '../../Divider/Divider'
import CustomButtom from '../../CustomButtom/CustomButtom'
import CustomTooltip from '../../CustomTooltip/CustomTooltip'
import Avatar from '../../Avatar/Avatar'
import CustomInputMention from '../../CustomInputMention/CustomInputMention'
import { useCreatePost, usePostList } from '../../../hooks/stores/usePost'
import LinksToDisplay from '../../LinksToDisplay/LinksToDisplay'

export default function CreatePostModal({ openModal, onClose, userData }) {
  const container = useRef(null)
  const {
    newPost,
    setNewPost,
    isLoadingCreatePost,
    isSuccessCreatePost,
    createPost,
    resetCreatePost
  } = useCreatePost()
  const { postList, setPostList } = usePostList()

  const [data, setData] = useState({ content: '' })
  const [links, setLinks] = useState([])

  useEffect(() => {
    if (isSuccessCreatePost) {
      setPostList([newPost, ...(postList || [])])
      onClose()
      resetCreatePost()
    }

    return () => {
      setNewPost(null)
    }
  }, [isSuccessCreatePost])

  const handleSubmit = () => {
    createPost({ ...data, links })
  }
  const fetchUsers = async (query, callback) => {
    const response = await axios.get(`user/search?searchQuery=${query}`)
    callback(response.data)
  }
  const extractLinks = (inputText) => {
    const urlPattern = /(?:https?:\/\/)?(www\.[^\s]+\.[a-z]{2,})/gi
    const detectedLinks = inputText?.match(urlPattern) || []
    const uniqueLinks = [...new Set(detectedLinks)]
    setLinks(uniqueLinks)
  }

  return (
    <Modal open={openModal} onClose={onClose}>
      <div className='w-[400px]'>
        <div>
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
                <div className='px-2 w-full ' ref={container}>
                  <div className='max-h-[190px] overflow-y-auto c-mention-input'>
                    <CustomInputMention
                      disabled={isLoadingCreatePost}
                      placeholder={`Que estas pensando, ${
                        userData?.name || ''
                      }?`}
                      value={data.content}
                      suggestionsPortalHost={container.current}
                      allowSuggestionsAboveCursor={true}
                      onChange={({}, newValue, {}, mentions) => {
                        setData((prev) => ({
                          ...prev,
                          content: newValue,
                          mentions: mentions?.map((mention) => mention?.id)
                        }))
                        extractLinks(newValue)
                      }}
                      data={(query, callback) => fetchUsers(query, callback)}
                    />
                  </div>
                  <div>
                    <LinksToDisplay links={links} setLinks={setLinks} />
                  </div>
                </div>
                <div className='mx-4 flex'>
                  <CustomTooltip title='Foto/Video'>
                    <CustomButtom
                      className='mx-[2px]'
                      iconButton
                      onClick={() => onClose()}
                      disabled={isLoadingCreatePost}
                    >
                      <IoMdImages className='w-6 h-6' />
                    </CustomButtom>
                  </CustomTooltip>
                  <CustomTooltip title='Emojis'>
                    <CustomButtom
                      className='mx-[2px]'
                      iconButton
                      onClick={() => onClose()}
                      disabled={isLoadingCreatePost}
                    >
                      <MdOutlineEmojiEmotions className='w-6 h-6' />
                    </CustomButtom>
                  </CustomTooltip>
                </div>
                <div className='flex m-2 justify-center items-center'>
                  <CustomButtom
                    className='w-full rounded-full'
                    disabled={!data.content}
                    onClick={handleSubmit}
                    loading={isLoadingCreatePost}
                  >
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
