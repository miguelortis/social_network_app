import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { jwtVerify } from 'jose'
import axios from '../../config/axios'
import { useAlert } from './useAlert'
import useStore from '../../store/store'
import {
  LOGGED_USER,
  LOGGED_USER_ERROR,
  LOGGED_USER_LOADING,
  LOGGED_USER_SUCCESS
} from './constants/auth-constants'

const useAuth = () => {
  const router = useRouter()
  const { state, setState } = useStore((state) => state)
  const { addAlert } = useAlert()
  const { mutate } = useMutation({
    mutationFn: async (credentials) => {
      setState({ [LOGGED_USER_LOADING]: true })
      const res = await axios.post('auth/login', credentials)
      return res
    },
    onSuccess: async (data) => {
      const { payload } = await jwtVerify(
        data.data.token,
        new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET)
      )
      setState({
        [LOGGED_USER]: payload,
        [LOGGED_USER_ERROR]: null,
        [LOGGED_USER_LOADING]: false,
        [LOGGED_USER_SUCCESS]: true
      })

      document.cookie = `token=${data.data.token}; path=/; max-age=2592000` // 30 días
      router.push('/account')
    },
    onError: (error) => {
      addAlert('error', error.response.data.message)
      setState({
        [LOGGED_USER]: null,
        [LOGGED_USER_ERROR]: error.response.data.message,
        [LOGGED_USER_LOADING]: false,
        [LOGGED_USER_SUCCESS]: false
      })
    }
  })

  const setLoggedUser = (data) => {
    setState({ [LOGGED_USER]: data })
  }
  const resetLoggedUser = (data) => {
    setState({
      [LOGGED_USER]: null,
      [LOGGED_USER_ERROR]: false,
      [LOGGED_USER_LOADING]: false,
      [LOGGED_USER_SUCCESS]: false
    })
  }

  return {
    loggedUser: state[LOGGED_USER],
    setLoggedUser,
    isSuccessLoggedUser: state[LOGGED_USER_SUCCESS],
    isLoadingLoggedUser: state[LOGGED_USER_LOADING],
    isErrorLoggedUser: state[LOGGED_USER_ERROR],
    loginUser: mutate,
    resetLoggedUser
  }
}

export { useAuth }
