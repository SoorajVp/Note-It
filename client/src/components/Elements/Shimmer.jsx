import React from 'react'

const Shimmer = () => {
  return (
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-3'>
          <div className='card w-full p-3 h-40 lg:p-4'></div>
          <div className='card w-full p-3 h-40 lg:p-4'></div>
          <div className='card w-full p-3 h-40 lg:p-4'></div>
          <div className='card w-full p-3 h-40 lg:p-4'></div>
      </div>
  )
}

export default Shimmer