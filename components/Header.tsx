import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {ThemeToggler} from './ThemeToggler';

function Header() {
  return (
    <header className='fixed w-full z-20 top-0 flex items-center justify-center p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900'>
      <Link href="/">
        <Image
          src="https://links.papareact.com/a943ae"
          alt="Disney Logo"
          className='cursor-pointer invert-0 dark:invert'
          width={80}
          height={80}
        />
      </Link>
      <div 
      className='flex space-x-2'>
        {/* GenreDropdown*/}
        {/* SearchBar*/}
        <ThemeToggler />
        {/* Login*/}

      </div>
    </header>    
  )
}

export default Header
