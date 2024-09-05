import React from 'react'

const CustomButtom = ({
  children,
  loading,
  className,
  color,
  disabled,
  iconButton = false,
  ...props
}) => {
  const colors = {
    success: 'bg-cyan-500',
    error: 'bg-red-500/50 hover:bg-red-500',
    warning: 'bg-yellow-500/50 hover:bg-yellow-500',
    default: 'bg-blue-500/50 hover:bg-blue-500',
    disabled: 'bg-gray-300',
  }
  const classType = iconButton
    ? `flex items-center justify-center rounded-full bg-gray-100 p-1 hover:bg-gray-200 ${className}`
    : `w-full text-white px-4 py-2 ${
        loading
          ? `cursor-wait ${colors.disabled}`
          : colors[color] || colors.default
      } rounded-full uppercase ${className}`

  return (
    <button disabled={loading || disabled} className={classType} {...props}>
      {children}
    </button>
  )
}

export default CustomButtom
