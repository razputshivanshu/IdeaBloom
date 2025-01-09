import React from 'react';
import Image from "../components/Image";
import { Link } from 'react-router-dom';
import PostMenuActions from '../components/PostMenuActions';
import Search from '../components/Search';
import Comments from '../components/Comments';

const SinglePostPage = () => {
  return (
    <div className='flex flex-col gap-8'>
      {/* details */}
      <div className='flex gap-8 '>
        <div className='lg:w-3/5 flex flex-col gap-8'>
          <h1 className='text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold'>Check out our list of blogs, bookmark those that resonate with you, </h1>
          <div className='flex items-center gap-2 text-gray-400 text-sm'>
            <span>Written by</span>
            <Link className='text-blue-800'>John Doe</Link>
            <span>on</span>
            <Link className='text-blue-800'>Web Design</Link>
            <span>2 Days ago</span>
          </div>
          <p className='text-gray-500 font-medium'>Check out our list of blogs, bookmark those that resonate with you, and revisit them whenever you need a burst of creative inspiration for your next web design project. Check out our list of blogs, bookmark those that resonate with you, and revisit them whenever you need a burst of creative inspiration for your next web design project. </p>
        </div>
        <div className='hidden lg:block w-2/5'>
          <Image src="postImg.jpeg" w="600" className="rounded-2xl" />
        </div>
      </div>

      {/* content */}
      <div className='flex flex-col md:flex-row gap-8'>
        {/* text */}
        <div className='lg:text-lg flex flex-col gap-6 text-justify'>
          <p>
            Sometimes, it takes a fresh perspective or a new design technique to ignite creativity. Exploring diverse design sources can be that pivotal nudge that pushes your boundaries and expands your creative horizons. Among the most enriching of these are web design blogs.
          </p>
          <p>
            While these platforms curate and share remarkable designs from across the web, they’re more than just collections and galleries. They also offer news, case studies, tutorials, and valuable articles packed with design tips and tricks.
          </p>
          <p>
            Check out our list of blogs, bookmark those that resonate with you, and revisit them whenever you need a burst of creative inspiration for your next web design project.
          </p>

           <p>
            Check out our list of blogs, bookmark those that resonate with you, and revisit them whenever you need a burst of creative inspiration for your next web design project.
          </p>

           <p>
            Check out our list of blogs, bookmark those that resonate with you, and revisit them whenever you need a burst of creative inspiration for your next web design project.
          </p>


           <p>
            Check out our list of blogs, bookmark those that resonate with you, and revisit them whenever you need a burst of creative inspiration for your next web design project.
          </p>


           <p>
            Check out our list of blogs, bookmark those that resonate with you, and revisit them whenever you need a burst of creative inspiration for your next web design project.
          </p>

           <p>
            Check out our list of blogs, bookmark those that resonate with you, and revisit them whenever you need a burst of creative inspiration for your next web design project.
          </p>



           <p>
            Check out our list of blogs, bookmark those that resonate with you, and revisit them whenever you need a burst of creative inspiration for your next web design project.
          </p>


           <p>
            Check out our list of blogs, bookmark those that resonate with you, and revisit them whenever you need a burst of creative inspiration for your next web design project.
          </p>


           <p>
            Check out our list of blogs, bookmark those that resonate with you, and revisit them whenever you need a burst of creative inspiration for your next web design project.
          </p>
        </div>
        {/* Menu */}
        <div className='px-4 h-max sticky top-8'>
          <h1 className='mb-4 text-sm font-medium'>Author</h1>
          <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-4'>
            <Image src="userImg.jpeg" className="w-12 h-12 rounded-full object-cover" w="48" h="48" />
            <Link className='text-blue-800' >John Doe</Link>
          </div>
          <p className='text-sm text-gray-500 '>Blogs are rich sources of web design inspiration.</p>
          <div className='flex gap-2'>
            <Link>
              <Image src="facebook.svg" />
            </Link>
           <Link><Image src="instagram.svg" /></Link>
            </div>
            </div>
          <PostMenuActions />
          <h1 className='mt-8 mb-4 text-sm font-medium'>Categories</h1>
          <div className='flex flex-col gap-2 text-sm'>
            <Link className='underline'>All</Link>
            <Link className='underline'>Web Design</Link>
            <Link className='underline'>Development</Link>
            <Link className='underline'>Databases</Link>
            <Link className='underline'>Search Engines</Link>
            <Link className='underline'>Marketing</Link>
          </div>
          <h1 className='mt-8 mb-4 text-sm font-medium'>Search</h1>
          <Search />
        </div>
      </div>
      <Comments/>
    </div>
  );
};

export default SinglePostPage;
