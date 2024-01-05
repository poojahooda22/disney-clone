import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Header() {
  return (
    <header>
      <Link href="/">
        <Image
          src="https://links.papareact.com/a943ae"
          alt="Disney Logo"
          className='cursor-pointer invert'
          width={80}
          height={80}
        />
      </Link>
      <div>
        {/* GenreDropdown*/}
        {/* SearchBar*/}
        {/* Login*/}

      </div>
    </header>
    
  )
}

export default Header
