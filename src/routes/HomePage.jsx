import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='mt-4 flex flex-col gap-4 '>
    
      {/* Bread Crumb */}
      <div className='flex gap-4'>
        <Link to="/">Home</Link>
        <span>☉</span>
        <span className='text-blue-800'>Blogs and Articles</span>
       
      </div>

      {/* Introduction Section  */}
      <div className='flex items-center justify-between'>
        <div className=''>
          <h1 className='text-grey-800 text-2xl md:text-5xl lg:text-6xl font-bold'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <p className='mt-8 text-md md:text-xl '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          </p>
        </div>
        {/* Animated Button */}
        <Link to="write"></Link>
      </div>

      {/* Featured Post */}

      {/* Post list */}


  </div>
  )
}

export default HomePage