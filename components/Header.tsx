import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {ThemeToggler} from './ThemeToggler';
import SearchInput from './SearchInput';
import GenreDropdown from './GenreDropdown';

function Header() {
  return (
    <header className='fixed w-full z-20 top-0 flex items-center justify-between p-5 
    bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900'>
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
        className='flex space-x-2 items-center gap-2'
      >
        {/* GenreDropdown*/}
        <GenreDropdown />
        <SearchInput/>
        <ThemeToggler />
        {/* Login*/}
      </div>
    </header>    
  )
}

export default Header
