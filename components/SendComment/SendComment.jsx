import { useRef, useState } from 'react'
import './sendComment.css'
import CustomInputMention from '../CustomInputMention/CustomInputMention'
import LinksToDisplay from '../LinksToDisplay/LinksToDisplay'
import axios from '../../config/axios'

const cameraIcon = (
  <svg
    className='h-5 w-5 text-blue-500'
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
    <path d='M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2' />{' '}
    <circle cx='12' cy='13' r='3' />
  </svg>
)
const stickerIcon = (
  <svg
    className='h-5 w-5 text-blue-500'
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
    <path stroke='none' d='M0 0h24v24H0z' /> <circle cx='12' cy='12' r='9' />{' '}
    <line x1='9' y1='9' x2='9.01' y2='9' />{' '}
    <line x1='15' y1='9' x2='15.01' y2='9' />{' '}
    <path d='M8 13a4 4 0 1 0 8 0m0 0H8' />
  </svg>
)
const arrowIcon = (
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
    <path stroke='none' d='M0 0h24v24H0z' /> <circle cx='12' cy='12' r='9' />{' '}
    <line x1='16' y1='12' x2='8' y2='12' />{' '}
    <line x1='16' y1='12' x2='12' y2='16' />{' '}
    <line x1='16' y1='12' x2='12' y2='8' />
  </svg>
)

export default function SendComment({ userData, commentRef }) {
  const container = useRef(null)
  const [showButtons, setShowButtons] = useState(false)
  const [message, setMessage] = useState('')
  const [rows, setRows] = useState(1)
  const [data, setData] = useState({ content: '' })
  const [links, setLinks] = useState([])

  const handleSubmit = () => {
    /* const newMessages = friendInfo?.messages?.length
      ? [...friendInfo?.messages, { user: currentUser?._id, message: message }]
      : [{ user: currentUser?._id, message: message }];

    setFriendInfo((prev) => ({ ...prev, messages: newMessages }));
    setUsers((prev) =>
      prev.map((user) =>
        user._id === friendInfo._id ? { ...user, messages: newMessages } : user
      )
    ); */
    setRows(1)
    setMessage('')
    //handleScrollChat();
  }
  const handleInputChange = (event) => {
    if (/^\n/.test(event.target.value)) {
      return
    }
    if (event.code === 'Enter' && !event.shiftKey && message) {
      event.preventDefault()
      // Si se presionó "Enter", resetea el contenido del textarea
      handleSubmit()
    } else {
      const textareaLineHeight = 20 // Ajusta esto según tus estilos CSS
      const minRows = 1
      const maxRows = 5

      const previousRows = event.target.rows
      event.target.rows = minRows // Restablece a una fila para calcular el scrollHeight
      const currentRows = Math.floor(
        event.target.scrollHeight / textareaLineHeight
      )

      if (currentRows === previousRows) {
        event.target.rows = currentRows
      }

      if (currentRows >= maxRows) {
        event.target.rows = maxRows
        event.target.scrollTop = event.target.scrollHeight
      }

      setMessage(event.target.value)
      setRows(currentRows)
    }
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
    <div>
      <div className='m-4 flex'>
        <div className='flex  px-2'>
          <div className='flex min-w-0 gap-x-4 mt-1'>
            <img
              className='h-9 w-10 flex-none rounded-full bg-gray-50'
              src={userData?.profilePic}
              alt=''
            />
          </div>
        </div>
        <div className='w-full bg-gray-100 rounded-2xl p-2'>
          <div className='px-2 w-full ' ref={container}>
            <div className='max-h-[190px] overflow-y-auto c-mention-input'>
              <CustomInputMention
                //disabled={isLoadingCreatePost}
                placeholder={`Escribe aquí...`}
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
          {/* <textarea
            value={message}
            onChange={handleInputChange}
            onFocus={() => setShowButtons(true)}
            onKeyDown={handleInputChange}
            placeholder="Escribe aquí..."
            rows={rows}
            ref={commentRef}
            name="price"
            id="price"
            autoComplete="off"
            autoFocus
          /> */}

          <div className='flex ml-2 flex justify-between'>
            <div>
              <button
                title='imagen/video'
                className='p-1 mt-2 hover:bg-gray-200 rounded-3xl'
              >
                {cameraIcon}
              </button>
              <button
                title='stickers'
                className='p-1 mt-2 hover:bg-gray-200 rounded-3xl'
              >
                {stickerIcon}
              </button>
            </div>
            <div>
              {' '}
              <button
                title='Enviar'
                className='p-1 mt-2 hover:bg-gray-200 rounded-3xl'
              >
                {arrowIcon}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
