'use client';
import classnames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaBug } from 'react-icons/fa6';

const NavBar = () => {
  const currentPath = usePathname();

  const linkList = [
    {
      name: 'Dashboard',
      href: '/',
    },
    {
      name: 'Issues',
      href: '/issues',
    },
  ];

  return (
    <nav className='flex space-x-6 px-5 mb-5 h-14  border-b items-center  '>
      <Link href='/'>
        <FaBug />
      </Link>
      <ul className='flex space-x-6'>
        {linkList.map((link, index) => (
          <Link
            key={index}
            className={classnames({
              'text-zinc-900': currentPath === link.href,
              'text-zinc-500': currentPath !== link.href,
              'hover:text-zinc-800 transition-colors': true,
            })}
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
