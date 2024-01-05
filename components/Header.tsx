import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Header() {
  return (
    <header>
      <Link href="/">
        <Image
          src="https://links.papereact.com/a943ae"
          alt="Disney+"
          
          width={80}
            height={80}
        />
      </Link>
    </header>
    
  )
}

export default Header
