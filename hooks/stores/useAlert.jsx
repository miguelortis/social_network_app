import useStore from '../../store/store'
import { ALERTS } from './constants/alert-constants'

const useAlert = () => {
  const { state, setState } = useStore((state) => state)
  const alerts = state[ALERTS] || []

  const addAlert = (type, message, duration = 5000) => {
    const id = Date.now()
    const timeoutId = setTimeout(() => {
      setState({
        [ALERTS]: alerts?.filter((alert) => alert.id !== id)
      })
    }, duration)
    setState({ [ALERTS]: [...alerts, { id, type, message, timeoutId }] })
  }
  const removeAlert = (id) => {
    setState({
      [ALERTS]: alerts?.filter((alert) => alert.id !== id)
    })
  }
  const pauseAlert = (id) => {
    const alert = alerts.find((alert) => alert.id === id)
    if (alert) {
      clearTimeout(alert.timeoutId)
    }
    setState({
      [ALERTS]: alerts
    })
  }
  const resumeAlert = (id, duration) => {
    const alert = alerts.find((alert) => alert.id === id)
    if (alert) {
      const timeoutId = setTimeout(() => {
        setState(() => ({
          alerts: alerts.filter((alert) => alert.id !== id)
        }))
      }, duration)
      alert.timeoutId = timeoutId
    }
    setState({
      [ALERTS]: alerts
    })
  }

  return {
    alerts,
    addAlert,
    removeAlert,
    pauseAlert,
    resumeAlert
  }
}

export { useAlert }
