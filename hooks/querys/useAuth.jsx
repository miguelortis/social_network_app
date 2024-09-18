import { useMutation } from '@tanstack/react-query'
import axios from '../../config/axios'

export function useAuth() {
  const fetchAuth = async (credentials) => {
    const res = await axios.post('auth/login', credentials)
    return res
  }

  return useMutation({
    mutationFn: fetchAuth,
  })
}
