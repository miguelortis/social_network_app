const Skeleton = ({ variant, width = 20, height = 20, ...props }) => {
  const getClassName = () => {
    switch (variant) {
      case 'text':
        return 'h-full w-full bg-gray-200 rounded'
      case 'circular':
        return 'h-full w-full bg-gray-200 rounded-full'
      case 'rectangular':
        return 'h-full w-full h-4 bg-gray-200'
      default:
        return 'h-full w-full bg-gray-200 rounded'
    }
  }
  return (
    <div
      style={{
        width: `${width}${
          typeof width === 'string' && width.includes('px') ? '' : 'px'
        }`,
        height: `${height}${
          typeof height === 'string' && height.includes('px') ? '' : 'px'
        }`,
      }}
      className={`animate-pulse space-y-4 ]`}
    >
      <div className={getClassName()} {...props}></div>
    </div>
  )
}

export default Skeleton
