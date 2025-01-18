import React from 'react'
import { IoIosBookmark } from "react-icons/io";
import { MdDeleteSweep } from "react-icons/md";
const PostMenuActions = () => {
  return (
    <div className=' '>
      <h1 className='mt-8 mb-4 text-sm font-medium'>Actions</h1>
      <div className='flex items-center gap-2 py-2 text-sm cursor-pointer'>
       <IoIosBookmark className='w-10 h-10' />
        <span>Save this post</span>
      </div>

      <div className='flex items-center gap-2 py-2 text-sm cursor-pointer'>
       <MdDeleteSweep className='w-10 h-10 ml-1.5' />
        <span>Delete this post </span>
      </div>
    </div>

    
  )
}

export default PostMenuActions