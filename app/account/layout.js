'use client'

import { useEffect } from 'react'
import { jwtVerify } from 'jose'
import cookie from 'cookie'
import Layout from '../../components/Layout/Layout'
import { useAuth } from '../../hooks/stores/useAuth'

export default function RootLayout({ children }) {
  const { loggedUser, setLoggedUser } = useAuth()

  useEffect(() => {
    if (!loggedUser) {
      const getLoggedUser = async () => {
        const { payload } = await jwtVerify(
          cookie.parse(document.cookie).token,
          new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET)
        )
        setLoggedUser(payload)
      }

      getLoggedUser()
    }
  }, [])

  return (
    <Layout>
      <div className='col-span-1 mt-2'>{children}</div>
    </Layout>
  )
}
