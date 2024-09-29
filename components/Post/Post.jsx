import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Divider from '../Divider/Divider'
import SendComment from '../SendComment/SendComment'
import CustomButtom from '../CustomButtom/CustomButtom'
import { useReactionPost } from '../../hooks/stores/usePost'
import { FaRegComment, FaRegHeart } from 'react-icons/fa'
import { useAuth } from '../../hooks/stores/useAuth'
import './styles/post.css'

const likeIcon = (
  <svg
    className='h-5 w-5 text-blue-400'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
    />
  </svg>
)
const commentIcon = (
  <svg
    className='h-5 w-5 text-blue-400'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    strokeWidth='2'
    stroke='currentColor'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    {' '}
    <path stroke='none' d='M0 0h24v24H0z' />{' '}
    <path d='M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1' />{' '}
    <line x1='12' y1='12' x2='12' y2='12.01' />{' '}
    <line x1='8' y1='12' x2='8' y2='12.01' />{' '}
    <line x1='16' y1='12' x2='16' y2='12.01' />
  </svg>
)
export default function Post({ data }) {
  const router = useRouter()
  const commentRef = useRef(null)
  const { addReactionPost } = useReactionPost()
  const { loggedUser } = useAuth()

  const [showSendComment, setShowSendComment] = useState(false)
  const [reactionType, setReactionType] = useState('')

  useEffect(() => {
    const reaction = data.reactions.find((r) => r.user === loggedUser?._id)
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
          <pre className='text-left font-sans'>{data.content}</pre>
        </div>
      </div>
      <div className='px-4 flex justify-between'>
        <div className='flex items-center'>
          {likeIcon}
          <span className='text-gray-300 text-xs px-1'>{`${data.reactions.length}`}</span>
        </div>
        <div className='flex items-center'>
          {commentIcon}
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
