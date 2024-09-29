import Axios from 'axios'
import cookie from 'cookie'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

const axios = Axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})

axios.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const cookies = cookie.parse(document.cookie)
      const token = cookies.token

      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axios
