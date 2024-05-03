'use client';

import Link from 'next/link';
import { useState } from 'react';
import Brand from '../Brand';
import NavLink from '../NavLink';

import { motion } from 'framer-motion';
import { textVariant, navVariants } from '../../../utils/motion';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [state, setState] = useState(false);

  const navigation = [
    { title: 'Features', path: '#features' },
    { title: 'Our toolkit', path: '#toolkit' },
    { title: 'Testimonials', path: '#testimonials' },
  ];

  const handleNavMenu = () => {
    setState(!state);
    document.body.classList.toggle('overflow-hidden');
  };
  const handleScroll = () => {
    setState(false);
    document.body.classList.remove('overflow-hidden');
  };
  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);

    document.body.classList.toggle('dark');
  };

  return (
    <motion.header
      variants={navVariants}
      initial='hidden'
      whileInView='show'
    >
      <nav
        className={`dark:bg-gray-800 bg-white w-full md:static md:text-sm ${
          state ? 'fixed z-10 h-full' : ''
        }`}
      >
        <div className='custom-screen items-center mx-auto md:flex'>
          <div className='flex items-center justify-between py-3 md:py-5 md:block'>
            <Brand />
            <div className='md:hidden flex items-center gap-4'>
              <button
                className='14px'
                onClick={handleDarkMode}
              >
                {isDarkMode ? '☀' : '🌙'}
              </button>
              <button
                role='button'
                aria-label='Open the menu'
                className='text-gray-500 hover:text-gray-800 dark:text-gray-300'
                onClick={handleNavMenu}
              >
                {state ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <motion.div
            className={`flex-1 pb-3 mt-8 md:pb-0 md:mt-0 md:block ${
              state ? '' : 'hidden'
            }`}
            variants={textVariant(0.1)}
            initial='hidden'
            whileInView='show'
          >
            <ul className='text-gray-700 justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0 md:text-gray-600 md:font-medium'>
              <button
                className='14px hidden md:block'
                onClick={handleDarkMode}
              >
                {isDarkMode ? '☀' : '🌙'}
              </button>
              {navigation.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className='duration-150 hover:text-gray-900 dark:text-gray-300
                    dark:hover:text-gray-100'
                    onClick={() => handleScroll()}
                  >
                    <Link
                      href={item.path}
                      className='block'
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
              <li>
                <NavLink
                  href='/get-started'
                  className='block font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 dark:bg-white dark:hover:bg-gray-300 dark:text-gray-800 md:inline'
                  onClick={() => handleScroll()}
                >
                  Let's work
                </NavLink>
              </li>
            </ul>
          </motion.div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
