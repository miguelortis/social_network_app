'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { routesToIgnore } from './helper/routes-to-ignore'
import MenuSidebar from '../MenuSidebar/MenuSidebar'
import Header from '../Header/Header'
import ContactList from '../ContactList/ContactList'
import Chat from '../Chat/Chat'
import ChatList from '../ChatList/ChatList'
import './styles/layoutStyles.css'

const subCategories = [
  {
    name: 'Inicio',
    type: 'account',
    icon: (
      <svg
        className='h-8 w-8 text-blue-400'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
        />
      </svg>
    ),
  },
  {
    name: 'Sugerencias',
    type: 'account/suggestions',
    icon: (
      <svg
        className='h-8 w-8 text-blue-400'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
        />
      </svg>
    ),
  },
  {
    name: 'Fans',
    type: 'fans',
    icon: (
      <svg
        className='h-8 w-8 text-blue-400'
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
        <path stroke='none' d='M0 0h24v24H0z' /> <circle cx='7' cy='5' r='2' />{' '}
        <path d='M5 22v-5l-1-1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5' />{' '}
        <circle cx='17' cy='5' r='2' />{' '}
        <path d='M15 22v-4h-2l2 -6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1l2 6h-2v4' />
      </svg>
    ),
  },
  {
    name: 'Suscripciones',
    type: 'subscriptions',
    icon: (
      <svg
        className='h-8 w-8 text-blue-400'
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
    ),
  },
  {
    name: 'Colecciones',
    type: 'sollections',
    icon: (
      <svg
        className='h-8 w-8 text-blue-400'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
        />
      </svg>
    ),
  },
  {
    name: 'Publicaciones',
    type: 'publications',
    icon: (
      <svg
        className='h-8 w-8 text-blue-400'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        {' '}
        <path d='M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z' />{' '}
        <polygon points='9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02' />
      </svg>
    ),
  },
  {
    name: 'Recientes',
    type: 'recent',
    icon: (
      <svg
        className='h-8 w-8 text-blue-400'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        {' '}
        <circle cx='12' cy='12' r='10' /> <polyline points='12 6 12 12 16 14' />
      </svg>
    ),
  },
]
const subMenus = [
  {
    id: 'color',
    name: 'Más',
    options: [
      { value: 'white', label: 'Mi Perfil', checked: false },
      { value: 'beige', label: 'Cambiar Contraseña', checked: false },
      { value: 'blue', label: 'Ajustes', checked: false },
      { value: 'brown', label: 'Ayuda', checked: false },
      { value: 'green', label: 'Acerca de Only Voyer', checked: false },
    ],
  },
]
const initialUserInfo = [
  {
    _id: '123jdj34jdfd3434ldi2394',
    name: 'Estefa',
    lastName: 'Castro',
    profilePic:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    online: true,
    messages: [
      {
        user: '123jdj34jdfd3434ldi2394',
        message: 'Hola.',
      },
      {
        user: 'asda76asd865asd9adkasdi',
        message: 'Hola. Que tal? 😠😭😱😴👍❤💩🎂🔥🐱',
      },
      {
        user: '123jdj34jdfd3434ldi2394',
        message: 'bien y tu?',
      },
      {
        user: 'asda76asd865asd9adkasdi',
        message: 'Bien Gracias a Dios.',
      },
      {
        user: '123jdj34jdfd3434ldi2394',
        message: 'Necesito un favor',
      },
      {
        user: '123jdj34jdfd3434ldi2394',
        message: 'Si puedes, claro.',
      },
      {
        user: 'asda76asd865asd9adkasdi',
        message: 'Dime a ver si puedo jejeje.',
      },
      {
        user: 'asda76asd865asd9adkasdi',
        message: ':)',
      },
      {
        user: 'asda76asd865asd9adkasdi',
        message: ':)',
      },
      {
        user: 'asda76asd865asd9adkasdi',
        message: ':)',
      },
    ],
  },
  {
    _id: '123jdj34jdfd3434ldi29g4',
    name: 'Mario',
    lastName: 'Sanchez',
    profilePic:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    online: false,
  },
  {
    _id: '123jdj34jdfd3s34ldi2355',
    name: 'Marcos',
    lastName: 'Mariño',
    profilePic:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    online: false,
  },
  {
    _id: '123jdj34jdfd34iopdi2394',
    name: 'Juan',
    lastName: 'Hernández',
    profilePic: 'perfil1.jpg',
    online: true,
  },
  {
    _id: '123jds4d0ffd3434ldi2394',
    name: 'José',
    lastName: 'Ventura',
    profilePic:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    online: true,
  },
  {
    _id: '123jdjasjdfd3434ldi2l0',
    name: 'Carlos',
    lastName: 'Martinez',
    profilePic:
      'https://images.pexels.com/photos/17993732/pexels-photo-17993732/free-photo-of-girl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    online: true,
  },
  {
    _id: '123jdj3423dd3434ldls4k5',
    name: 'Jota',
    lastName: 'Colmenares',
    profilePic:
      'https://plus.unsplash.com/premium_photo-1682965699358-19cafa9eb0aa?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    online: true,
  },
]

export default function Layout({ children }) {
  const pathname = usePathname()
  const routeWithoutSidebar = !routesToIgnore.includes(
    `/${pathname.split('/')[1]}`
  )

  const [users, setUsers] = useState(initialUserInfo)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const [friendInfoForChat, setFriendInfoForChat] = useState(null)
  const [chats, setChats] = useState([])

  return (
    <div className='bg-white'>
      <div>
        {/* Header */}
        <Header setMobileFiltersOpen={setMobileFiltersOpen} />
        <main className='mx-auto grid grid-cols-1 lg:gap-x-6 lg:grid-cols-4 lg:grid-rows-1 lg:max-w-7xl'>
          {/* Menu */}
          {routeWithoutSidebar && (
            <MenuSidebar
              setMobileFiltersOpen={setMobileFiltersOpen}
              mobileFiltersOpen={mobileFiltersOpen}
              subCategories={subCategories}
              subMenus={subMenus}
            />
          )}
          {/* content */}
          <div
            className={`lg:col-span-${
              routeWithoutSidebar ? 2 : 4
            } content mt-2`}
          >
            {children}
          </div>
          {/* Contacts */}
          {routeWithoutSidebar && (
            <ContactList
              users={users}
              setShowChat={setShowChat}
              showChat={showChat}
              setFriendInfoForChat={setFriendInfoForChat}
              setChats={setChats}
            />
          )}
          {/* ChatList */}
          <ChatList
            chats={chats}
            setChats={setChats}
            setShowChat={setShowChat}
            setFriendInfoForChat={setFriendInfoForChat}
          />
          {/* chat */}
          {showChat && (
            <Chat
              setShowChat={setShowChat}
              showChat={showChat}
              friendInfo={friendInfoForChat}
              setFriendInfo={setFriendInfoForChat}
              setChats={setChats}
              setUsers={setUsers}
            />
          )}
        </main>
      </div>
    </div>
  )
}
