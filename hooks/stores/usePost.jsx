import { useMutation } from '@tanstack/react-query'
import axios from '../../config/axios'
import { useAlert } from './useAlert'
import useStore from '../../store/store'
import {
  CREATE_POST,
  CREATE_POST_ERROR,
  CREATE_POST_LOADING,
  CREATE_POST_SUCCESS,
  POST_LIST,
  POST_LIST_ERROR,
  POST_LIST_LOADING,
  POST_LIST_SUCCESS,
  REACTION_POST,
  REACTION_POST_ERROR,
  REACTION_POST_LOADING,
  REACTION_POST_SUCCESS
} from './constants/post-constants'

const useCreatePost = () => {
  const { addAlert } = useAlert()
  const { state, setState } = useStore((state) => state)
  const { mutate } = useMutation({
    mutationFn: async (data) => {
      setState({ [CREATE_POST_LOADING]: true })
      const response = await axios.post('post', data)
      return response.data
    },
    onSuccess: (post) => {
      setState({
        [CREATE_POST]: post.data,
        [CREATE_POST_ERROR]: null,
        [CREATE_POST_LOADING]: false,
        [CREATE_POST_SUCCESS]: true
      })
    },
    onError: (error) => {
      addAlert('error', error.response.data.message)
      setState({
        [CREATE_POST]: null,
        [CREATE_POST_ERROR]: error.response.data.message,
        [CREATE_POST_LOADING]: false,
        [CREATE_POST_SUCCESS]: false
      })
    }
  })
  const setNewPost = (data) => {
    setState({ [CREATE_POST]: data })
  }
  const resetCreatePost = () => {
    setState({
      [CREATE_POST]: null,
      [CREATE_POST_ERROR]: false,
      [CREATE_POST_LOADING]: false,
      [CREATE_POST_SUCCESS]: false
    })
  }

  return {
    newPost: state[CREATE_POST],
    setNewPost,
    createPost: mutate,
    isSuccessCreatePost: state[CREATE_POST_SUCCESS],
    isLoadingCreatePost: state[CREATE_POST_LOADING],
    isErrorCreatePost: state[CREATE_POST_ERROR],
    resetCreatePost
  }
}
const usePostList = () => {
  const { state, setState } = useStore((state) => state)
  const { mutate } = useMutation({
    mutationFn: async () => {
      setState({ [POST_LIST_LOADING]: true })
      const response = await axios.get('post')
      return response.data
    },
    onSuccess: (data) => {
      setState({
        [POST_LIST]: data,
        [POST_LIST_ERROR]: null,
        [POST_LIST_LOADING]: false,
        [POST_LIST_SUCCESS]: true
      })
    },
    onError: (error) => {
      addAlert('error', error.response.data.message)
      setState({
        [POST_LIST]: null,
        [POST_LIST_ERROR]: error.response.data.message,
        [POST_LIST_LOADING]: false,
        [POST_LIST_SUCCESS]: false
      })
    }
  })

  const setPostList = (data) => {
    setState({ [POST_LIST]: data })
  }
  const resetPostList = () => {
    setState({
      [POST_LIST]: null,
      [POST_LIST_ERROR]: null,
      [POST_LIST_LOADING]: false,
      [POST_LIST_SUCCESS]: false
    })
  }

  return {
    postList: state[POST_LIST],
    setPostList,
    isSuccessPostList: state[POST_LIST_SUCCESS],
    isLoadingPostList: state[POST_LIST_LOADING],
    isErrorPostList: state[POST_LIST_ERROR],
    getPostList: mutate,
    resetPostList
  }
}
const useReactionPost = () => {
  const { addAlert } = useAlert()
  const { state, setState } = useStore((state) => state)
  const { mutate } = useMutation({
    mutationFn: async (post) => {
      resetReactionPost()
      setState({ [REACTION_POST_LOADING]: true })
      const response = await axios.put(`post/reaction/${post._id}`, post)
      return response.data
    },
    onSuccess: (post) => {
      setState({
        [REACTION_POST]: post.data,
        [REACTION_POST_ERROR]: null,
        [REACTION_POST_LOADING]: false,
        [REACTION_POST_SUCCESS]: true
      })
    },
    onError: (error) => {
      addAlert('error', error.response.data.message)
      setState({
        [REACTION_POST]: null,
        [REACTION_POST_ERROR]: error.response.data.message,
        [REACTION_POST_LOADING]: false,
        [REACTION_POST_SUCCESS]: false
      })
    }
  })
  const setReactionPost = (data) => {
    setState({ [REACTION_POST]: data })
  }
  const resetReactionPost = () => {
    setState({
      [REACTION_POST]: null,
      [REACTION_POST_ERROR]: null,
      [REACTION_POST_LOADING]: false,
      [REACTION_POST_SUCCESS]: false
    })
  }

  return {
    reactionPost: state[REACTION_POST],
    setReactionPost,
    addReactionPost: mutate,
    isSuccessReactionPost: state[REACTION_POST_SUCCESS],
    isLoadingReactionPost: state[REACTION_POST_LOADING],
    isErrorReactionPost: state[REACTION_POST_ERROR],
    resetReactionPost
  }
}

export { useCreatePost, usePostList, useReactionPost }
