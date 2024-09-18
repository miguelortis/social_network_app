import { create } from 'zustand'

export const usePostListStore = create((set) => {
  return {
    postList: [],
    setPostList: (data) => {
      set({ postList: data })
    },
    resetPostList: () => {
      set({ postList: [] })
    },
  }
})
