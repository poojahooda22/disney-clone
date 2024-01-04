import React from 'react';
import Link from 'next/link';


function Header() {
  return (
    <Link href="/">
        <Image
            src="https://links.papereact.com/a943ae"
            alt="Disney+"
            width={80}
            height={80}
        />
    </Link>
  )
}

export default Header
