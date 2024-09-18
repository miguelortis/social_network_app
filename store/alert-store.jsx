import { create } from 'zustand'

const useAlertStore = create((set) => ({
  alerts: [],
  addAlert: (type, message, duration = 5000) => {
    const id = Date.now()
    const timeoutId = setTimeout(() => {
      set((state) => ({
        alerts: state.alerts.filter((alert) => alert.id !== id),
      }))
    }, duration)

    set((state) => ({
      alerts: [...state.alerts, { id, type, message, timeoutId }],
    }))
  },
  removeAlert: (id) => {
    set((state) => ({
      alerts: state.alerts.filter((alert) => alert.id !== id),
    }))
  },
  pauseAlert: (id) => {
    set((state) => {
      const alert = state.alerts.find((alert) => alert.id === id)
      if (alert) {
        clearTimeout(alert.timeoutId)
      }
      return state
    })
  },
  resumeAlert: (id, duration) => {
    set((state) => {
      const alert = state.alerts.find((alert) => alert.id === id)
      if (alert) {
        const timeoutId = setTimeout(() => {
          set((state) => ({
            alerts: state.alerts.filter((alert) => alert.id !== id),
          }))
        }, duration)
        alert.timeoutId = timeoutId
      }
      return state
    })
  },
}))

export default useAlertStore
