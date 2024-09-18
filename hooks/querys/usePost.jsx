import { useMutation } from '@tanstack/react-query'
import axios from '../../config/axios'

export function usePost() {
  const createPost = useMutation({
    mutationFn: async (data) => {
      return await axios.post('post', data)
    },
  })
  const fetchPost = useMutation({
    mutationFn: async (id) => {
      return await axios.get(`post/${id}`)
    },
  })
  const fetchPosts = useMutation({
    mutationFn: async () => {
      return await axios.get('post')
    },
  })

  return {
    createPost,
    fetchPost,
    fetchPosts,
  }
}
