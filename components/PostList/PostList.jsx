'use client'

import { useEffect } from 'react'
import { useParams } from 'next/navigation'
import Post from '../Post/Post'
import LoadingPost from './components/LoadingPost'
import NoPostsMessage from './components/NoPostsMessage'
import { usePostList, useReactionPost } from '../../hooks/stores/usePost'
import { useAuth } from '../../hooks/stores/useAuth'
import { motion, AnimatePresence } from 'framer-motion'

export default function PostList() {
  const { getPostList, postList, setPostList, isLoadingPostList } =
    usePostList()
  const { reactionPost, setReactionPost, isSuccessReactionPost } =
    useReactionPost()
  const { loggedUser } = useAuth()
  const { user } = useParams()

  useEffect(() => {
    getPostList()
  }, [])
  useEffect(() => {
    if (isSuccessReactionPost) {
      setPostList(
        postList?.map((post) =>
          post._id === reactionPost?._id
            ? { ...post, reactions: reactionPost?.reactions }
            : post
        )
      )
      setReactionPost(null)
    }
  }, [isSuccessReactionPost])

  return (
    <>
      <AnimatePresence>
        {postList && postList?.length > 0
          ? postList?.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Post data={item} userData={loggedUser} />
              </motion.div>
            ))
          : !isLoadingPostList && <NoPostsMessage />}
      </AnimatePresence>
      {isLoadingPostList && <LoadingPost />}
    </>
  )
}
