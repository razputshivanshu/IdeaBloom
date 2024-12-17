import React, { useState } from 'react';
import { IKImage } from 'imagekitio-react';
import Image from './Image';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='w-full h-16 md:h-20 flex items-center justify-between'>
      {/* Logo */}
      <Link to="/" className='flex items-center gap-4 text-2xl font-bold'>
        <Image src="logo.png" alt="Main Logo" w={32} h={32} />
        <span>IdeaBloom</span>
      </Link>

      {/* Mobile Menu Button */}
      <div className='md:hidden'>
        <div
          className='cursor-pointer text-4xl'
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? 'X' : '☰'}
        </div>
      </div>

      {/* Mobile Link List */}
      <div
        className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 left-0 transition-all duration-300 ${open ? 'left-0' : '-left-full'}`}
      >
        <Link to="/" className='px-4 py-2'>Home</Link>
        <Link to="/" className='px-4 py-2'>Trending</Link>
        <Link to="/" className='px-4 py-2'>Most Popular</Link>
        <Link to="/" className='px-4 py-2'>About</Link>
        <Link to="/" className='px-4 py-2'>
          <button className='py-2 px-4 rounded-3xl bg-blue-800 text-white'>
            Login 👋
          </button>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className='hidden md:flex items-center gap-8 xl:gap-8 font-medium'>
        <Link to="/" className='px-4'>Home</Link>
        <Link to="/" className='px-4'>Trending</Link>
        <Link to="/" className='px-4'>Most Popular</Link>
        <Link to="/" className='px-4'>About</Link>


        <SignedOut>
        <Link to="/login" className='px-4'>
          <button className='py-2 px-4 rounded-3xl bg-blue-800 text-white'>
            Login 👋
          </button>
          </Link>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
        
      </div>
    </div>
  );
};

export default Navbar;
