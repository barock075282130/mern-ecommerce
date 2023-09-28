const CardSkeleton = () => {
  return (
    <div className='grid gap-3 border p-4'>
        <div className="flex justify-center items-center h-32 bg-gray-400 animate-pulse">
            <div style={{ width: 'auto', height: '50%' }} />
        </div>
        <div className="bg-gray-400 animate-pulse w-full h-[25px]" />
        <div className="flex justify-between items-center">
            <div className='flex'>
                <svg className="w-4 h-4 text-gray-400 mr-1 animate-pulse" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg> 
                <div className="bg-gray-400 animate-pulse w-[3em] h-[1em]" />
            </div>
            <div>
                <div className="bg-gray-400 animate-pulse w-[3em] h-[1em]" />
            </div>
        </div>
        <div className="flex items-end">
            <div className='w-full h-[32px] bg-gray-400 animate-pulse' />
        </div>
    </div>
  )
}

export default CardSkeleton