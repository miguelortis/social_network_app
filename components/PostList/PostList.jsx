'use client'

import { useEffect } from 'react'
import { useParams } from 'next/navigation'
import Post from '../Post/Post'
import { useLoggedUserStore } from '../../store/logged-user-store'
import { usePostListStore } from '../../store/post-store'
import { usePost } from '../../hooks/querys/usePost'

export default function PostList() {
  const userLoggedData = useLoggedUserStore((state) => state.userLoggedData)
  const { fetchPosts } = usePost()
  const postList = usePostListStore((state) => state.postList)
  const setPostList = usePostListStore((state) => state.setPostList)
  const { user } = useParams()

  useEffect(() => {
    fetchPosts.mutate('', {
      onSuccess: async (data) => {
        setPostList(data.data)
      },
      onError: (error) => {
        console.error(error.response.data.message)
      },
    })
  }, [])

  return (
    <>
      {postList &&
        postList?.map((item, i) => {
          return <Post key={i} data={item} userData={userLoggedData} />
        })}
    </>
  )
}
