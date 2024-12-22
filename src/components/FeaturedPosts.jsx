import React from 'react';
import Image from './Image';
import { Link } from 'react-router-dom';

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First Post */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Image */}
        <Image 
          src="featured1.jpeg" 
          className="rounded-3xl object-cover w-full h-64 lg:h-96" 
        />
        {/* Image details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold text-lg">01.</h1>
          <Link to="/category/web-design" className="text-blue-800 text-lg">
            Web Design
          </Link>
          <span className="text-gray-500 text-sm">2 days ago</span>
        </div>
        {/* Title */}
        <Link 
          to="/post/1" 
          className="text-xl lg:text-3xl font-semibold lg:font-bold leading-snug">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </Link>
      </div>

      {/* Other Posts */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        {/* Second Post */}
        <div className="flex gap-4">
          <Image 
            src="featured2.jpeg" 
            className="rounded-3xl object-cover w-1/3 h-32 lg:h-40" 
          />
          <div className="w-2/3">
            {/* Details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-2">
              <h1 className="font-semibold">02.</h1>
              <Link to="/category/web-design" className="text-blue-800">
                Web Design
              </Link>
              <span className="text-gray-500">2 days ago</span>
            </div>
            {/* Title */}
            <Link 
              to="/post/2" 
              className="text-base sm:text-lg md:text-xl font-medium leading-snug">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Link>
          </div>
        </div>

        {/* Third Post */}
        <div className="flex gap-4">
          <Image 
            src="featured3.jpeg" 
            className="rounded-3xl object-cover w-1/3 h-32 lg:h-40" 
          />
          <div className="w-2/3">
            {/* Details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-2">
              <h1 className="font-semibold">03.</h1>
              <Link to="/category/graphic-design" className="text-blue-800">
                Graphic Design
              </Link>
              <span className="text-gray-500">5 days ago</span>
            </div>
            {/* Title */}
            <Link 
              to="/post/3" 
              className="text-base sm:text-lg md:text-xl font-medium leading-snug">
              Creating stunning visuals with a modern touch.
            </Link>
          </div>
        </div>

        {/* Fourth Post */}
        <div className="flex gap-4">
          <Image 
            src="featured4.jpeg" 
            className="rounded-3xl object-cover w-1/3 h-32 lg:h-40" 
          />
          <div className="w-2/3">
            {/* Details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-2">
              <h1 className="font-semibold">04.</h1>
              <Link to="/category/branding" className="text-blue-800">
                Branding
              </Link>
              <span className="text-gray-500">1 week ago</span>
            </div>
            {/* Title */}
            <Link 
              to="/post/4" 
              className="text-base sm:text-lg md:text-xl font-medium leading-snug">
              Building strong brands that resonate with audiences.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
