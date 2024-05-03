'use client';

import SectionWrapper from '../../SectionWrapper';
import NavLink from '../NavLink';

import { motion } from 'framer-motion';
import { staggerContainer, textVariant } from '../../../utils/motion';

const FooterCTA = () => (
  <SectionWrapper>
    <div
      className='custom-screen'
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.div
        className='max-w-2xl mx-auto text-center'
        variants={textVariant(0.9)}
        initial='hidden'
        whileInView='show'
      >
        <h2 className='text-gray-800 text-3xl font-semibold sm:text-4xl dark:text-gray-100'>
          Get started with Blinder today
        </h2>
        <p className='mt-3 text-gray-600 dark:text-gray-300'>
          Hire me to create your next idea, follow best practices, remove
          roadblocks, and delivery on schedule.
        </p>
        <NavLink
          href='/get-started'
          className='mt-4 inline-block font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 dark:bg-white dark:hover:bg-gray-300 dark:text-gray-800'
        >
          Contact me
        </NavLink>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default FooterCTA;
