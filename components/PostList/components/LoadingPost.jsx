import Skeleton from '../../Skeleton/Skeleton'

const LoadingPost = () => {
  return (
    <div>
      <div className='bg-white lg:rounded-[12px] p-1 mt-3 mb-3'>
        <div className='p-4 flex'>
          <div>
            <Skeleton variant='circular' width={50} height={50} />
          </div>
          <div className='ml-4 mt-2'>
            <div>
              <Skeleton variant='text' width={100} height={15} />
            </div>
            <div className='mt-3'>
              <Skeleton variant='text' width={20} height={13} />
            </div>
          </div>
        </div>
        <div className='ml-4 mt-2 h-52'></div>
        <div className='ml-4 mb-2 flex justify-evenly'>
          <div>
            <Skeleton variant='text' width={80} height={20} />
          </div>
          <div>
            <Skeleton variant='text' width={80} height={20} />
          </div>
        </div>
      </div>
      <div className='bg-white lg:rounded-[12px] p-1 mt-3 mb-3'>
        <div className='p-4 flex'>
          <div>
            <Skeleton variant='circular' width={50} height={50} />
          </div>
          <div className='ml-4 mt-2'>
            <div>
              <Skeleton variant='text' width={100} height={15} />
            </div>
            <div className='mt-3'>
              <Skeleton variant='text' width={20} height={13} />
            </div>
          </div>
        </div>
        <div className='ml-4 mt-2 h-52'></div>
        <div className='ml-4 mb-2 flex justify-evenly'>
          <div>
            <Skeleton variant='text' width={80} height={20} />
          </div>
          <div>
            <Skeleton variant='text' width={80} height={20} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingPost
