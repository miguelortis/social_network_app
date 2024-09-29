import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

export const useLoggedUserStore = create(
  devtools(
    persist(
      (set, get) => {
        return {
          loggedUserData: {},

          setLoggedUserData: (loggedUserData) => {
            set({ loggedUserData })
          },

          reset: () => {
            set({ loggedUserData: {} })
          }
        }
      },
      {
        name: 'loggedUser'
      }
    )
  )
)
