'use client'

import { useAlert } from '../../hooks/stores/useAlert'
import CustomButtom from '../CustomButtom/CustomButtom'
import { MdClose } from 'react-icons/md'

const Alert = () => {
  const { alerts, removeAlert, pauseAlert, resumeAlert } = useAlert()

  const pausedAlert = (alertId) => {
    pauseAlert(alertId)
  }
  const resumedAlert = (alertId, duration) => {
    resumeAlert(alertId, duration)
  }

  return (
    <div className='fixed bottom-0 left-0 p-4 space-y-2'>
      {alerts?.map((alert) => (
        <div
          key={alert.id}
          className={`flex items-centertransition-opacity duration-500 opacity-100 py-2 px-4 rounded shadow-lg ${
            alert.type === 'success'
              ? 'bg-green-500'
              : alert.type === 'error'
              ? 'bg-red-500'
              : alert.type === 'warning'
              ? 'bg-yellow-500'
              : 'bg-blue-500'
          } text-white`}
          onMouseEnter={() => pausedAlert(alert.id)}
          onMouseLeave={() => resumedAlert(alert.id, 3000)}
        >
          {alert.message}
          <CustomButtom
            iconButton
            className='bg-transparent p-2 ml-2 hover:bg-slate-50/[.3]'
            onClick={() => removeAlert(alert.id)}
          >
            <MdClose />
          </CustomButtom>
        </div>
      ))}
    </div>
  )
}

export default Alert
