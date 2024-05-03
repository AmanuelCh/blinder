'use client';

import NavLink from '../NavLink';

import { motion } from 'framer-motion';
import { staggerContainer, textVariant } from '../../../utils/motion';

const Hero = () => (
  <section>
    <motion.div
      className='custom-screen py-28 text-gray-600'
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className='space-y-5 max-w-4xl mx-auto text-center'>
        <motion.h1
          className='text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl dark:text-gray-100'
          variants={textVariant(0.7)}
        >
          Build and scale your next business idea faster
        </motion.h1>

        <motion.p
          className='max-w-xl mx-auto dark:text-gray-300'
          variants={textVariant(0.8)}
        >
          I'm here for you to build and grow your business idea so that you get
          the maximum benefit.
        </motion.p>
        <motion.div
          className='flex items-center justify-center gap-x-3 font-medium text-sm'
          variants={textVariant(0.9)}
        >
          <NavLink
            href='/get-started'
            className='text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 dark:bg-white dark:hover:bg-gray-300 dark:text-gray-800'
          >
            Contact me
          </NavLink>
          <NavLink
            href='#cta'
            className='text-gray-700 border hover:bg-gray-50 dark:text-gray-300 dark:border-gray-300 dark:hover:bg-transparent dark:hover:border-gray-800'
            scroll={false}
          >
            Learn more
          </NavLink>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
