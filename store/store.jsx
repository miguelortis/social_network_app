import { create } from 'zustand'

const useStore = create((set) => ({
  state: {},
  setState: (data) =>
    set((prev) => ({
      state: { ...prev.state, ...data },
    })),
}))

export default useStore
