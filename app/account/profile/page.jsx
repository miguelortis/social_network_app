'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Profile(params) {
  const router = useRouter()

  useEffect(() => {
    router.back()
  }, [])
}
