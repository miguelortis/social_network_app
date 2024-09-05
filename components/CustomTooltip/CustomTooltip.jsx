'Use client'

import { useState } from 'react'

const CustomTooltip = ({ title, children }) => {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className='relative flex items-center'>
      <div
        className='relative'
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </div>
      {showTooltip && (
        <div className='absolute bottom-full mb-2 w-max px-2 py-1 bg-gray-800 text-white text-sm rounded'>
          {title}
        </div>
      )}
    </div>
  )
}

export default CustomTooltip
