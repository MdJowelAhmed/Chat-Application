import React from 'react'

const Auth = () => {
  return (
    <div className='h-[100vh] w-[100vw] flex items-center justify-center'>
      <div className='h-[80vh] w-[80vw] bg-white border-2 border-white text-opacity-90 shadow-2xl md:w-[90vw] lg:w-[70vw] xl:w-[60vw] grid lg:grid-cols-2 rounded-3xl '>
        <div className='flex flex-col gap-10 justify-center items-center'>
          <div className='flex justify-center items-center flex-col'>
            <div className=' flex justify-center items-center'>
              <h1 className='text-3xl lg:text-5xl font-bold'>Welcome </h1>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Auth