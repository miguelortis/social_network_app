'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import './styles.css'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    redirectToLogin()
  }, [])

  const redirectToLogin = () => {
    router.push('/login')
  }

  return (
    <>
      <h1>HOME</h1>
    </>
  )
}
