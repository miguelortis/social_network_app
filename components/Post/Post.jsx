import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Divider from '../Divider/Divider'
import SendComment from '../SendComment/SendComment'
import CustomButtom from '../CustomButtom/CustomButtom'
import { useReactionPost } from '../../hooks/stores/usePost'
import { FaRegComment, FaRegHeart } from 'react-icons/fa'
import { processContent } from '../../utils/helpers/process-content'
import { useAuth } from '../../hooks/stores/useAuth'
import './styles/post.css'

export default function Post({ data }) {
  const router = useRouter()
  const commentRef = useRef(null)
  const { addReactionPost } = useReactionPost()
  const { loggedUser } = useAuth()

  const [showSendComment, setShowSendComment] = useState(false)
  const [reactionType, setReactionType] = useState('')

  useEffect(() => {
    const reaction = data?.reactions?.find((r) => r?.user === loggedUser?._id)
    setReactionType(reaction?.type || '')
  }, [data?.reactions])

  const handleReaction = (type) => {
    addReactionPost({ _id: data._id, type: type })
    setReactionType((prev) => (prev ? '' : type))
  }

  return (
    <div className='bg-white lg:rounded-[12px] p-1 mt-3 mb-3'>
      <div className='px-4 pb-4'>
        <div className='flex items-center pt-4 pb-4'>
          <div className='flex min-w-0 gap-x-4 '>
            <img
              className='h-12 w-12 flex-none rounded-full bg-gray-50 hover:cursor-pointer hover:border-solid hover:border-2 hover:border-black'
              src={data?.author?.Avatar}
              alt=''
              onClick={() =>
                router.push(`/account/profile/${data?.author?._id}`)
              }
            />
          </div>
          <div className='shrink-0 sm:flex sm:flex-col px-4'>
            <div className='min-w-0 flex-auto '>
              <p
                className='text-sm font-semibold leading-6 text-gray-900 hover:cursor-pointer hover:underline'
                onClick={() =>
                  router.push(`/account/profile/${data?.author?._id}`)
                }
              >
                {`${data?.author?.name || ''} ${data?.author?.lastName || ''}`}
              </p>
              <span className='text-gray-500 text-xs'>4h</span>
            </div>
          </div>
        </div>
        <div className='text-gray-500'>
          <pre
            className='text-left whitespace-pre-wrap font-sans'
            dangerouslySetInnerHTML={{
              __html: processContent(data?.content, data?.mentions)
            }}
          />
        </div>
      </div>
      <div className='px-4 flex justify-between'>
        <div className='flex items-center'>
          <FaRegHeart className='h-4 w-4 text-blue-400' />
          <span className='text-gray-300 text-xs px-1'>{`${data?.reactions?.length}`}</span>
        </div>
        <div className='flex items-center'>
          <FaRegComment className='h-4 w-4 text-blue-400' />
          <span className='text-gray-300 text-xs px-1'>45</span>
        </div>
      </div>
      <Divider style={{ width: '95%' }} />
      {/* like and comment buttons */}
      <div className='flex justify-evenly items-center py-1'>
        <CustomButtom
          onClick={() => handleReaction('like')}
          className='w-[150px] h-[35px] flex items-center hover:bg-gray-100 rounded p-1 bg-transparent'
        >
          <div
            className={`flex items-center text-sm text-gray-400 ${reactionType}`}
          >
            <FaRegHeart className='mx-2 h-7 w-7 text-inherit' />
            <span className='text-inherit'>Me gusta</span>
          </div>
        </CustomButtom>
        <CustomButtom
          className='w-[150px] h-[35px] flex items-center hover:bg-gray-100 rounded p-1 bg-transparent'
          onClick={() => [
            setShowSendComment(true),
            commentRef?.current?.focus()
          ]}
        >
          <FaRegComment className='mx-2 h-7 w-7 fill-gray-400' />
          <span className='text-gray-400 text-sm'>Comentar</span>
        </CustomButtom>
      </div>
      <Divider style={{ width: '95%' }} />
      {/* add comment component */}
      {showSendComment && <SendComment commentRef={commentRef} />}
    </div>
  )
}
