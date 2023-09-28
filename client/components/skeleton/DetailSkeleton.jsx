const DetailSkeleton = () => {
  return (
    <div className="w-full">
        <div className="flex gap-6">
            <div className='w-[15em] h-[18em] bg-gray-400 animate-pulse' />
            <div className="grid gap-2 w-full">
                <div className='h-[25px] bg-gray-400 w-full animate-pulse' />
                <div className="h-[25px] bg-gray-400 w-full animate-pulse" />
                <div className="h-[10em] bg-gray-400 w-full animate-pulse" />
                <div className="flex justify-between">
                    <div className="flex items-center p-2 gap-2 font-semibold">
                        <div className='text-gray-400 animate-pulse'>$</div>
                        <div className='h-[25px] w-[4em] bg-gray-400 animate-pulse'/>
                    </div>
                    <div className="flex items-center p-2">
                        <span className="flex items items-center font-semibold">
                            <svg className="w-4 h-4 text-gray-400 animate-pulse mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg> 
                            <div className='w-[4em] h-[25px] bg-gray-400 animate-pulse' />
                        </span>
                        <span className="w-1 h-1 mx-1.5 bg-gray-500 animate-pulse rounded-full dark:bg-gray-400"></span>
                        <div className="w-[4em] h-[25px] bg-gray-400 animate-pulse" />
                    </div>
                </div>
                    <div className='w-full h-[3em] bg-gray-400 animate-pulse' />
                    <div className="flex gap-3 justify-end">
                        <div className='h-[25px] w-[6em] bg-gray-400 animate-pulse' />
                    </div>
            </div>    
        </div>
    </div>
  )
}

export default DetailSkeleton