'use client';

import SectionWrapper from '../../SectionWrapper';
import NavLink from '../NavLink';
import ctaImage from '../../../public/cta-image.jpg';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { staggerContainer, textVariant } from '../../../utils/motion';

const CTA = () => {
  return (
    <SectionWrapper
      id='cta'
      className='pb-0'
    >
      <motion.div
        className='custom-screen'
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className='items-center gap-x-12 lg:flex'>
          <motion.div
            className='flex-1 sm:hidden lg:block'
            variants={textVariant(0.6)}
          >
            <Image
              src={ctaImage}
              className='rounded-lg md:max-w-lg'
              alt='Create Successful Business Models with Our IT Solutions'
            />
          </motion.div>
          <motion.div
            className='max-w-xl mt-6 md:mt-0 lg:max-w-2xl'
            variants={textVariant(0.8)}
          >
            <h2 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
              Create Successful Business Models and Watch It Come True.
            </h2>
            <p className='mt-3 text-gray-600'>
              Hi, I'm John Doe, a software developer. I help you digitize
              businesses by focusing on your business challenges and needs. I
              value close transparent cooperation and encourage you to
              participate actively in the project development life cycle.
            </p>
            <NavLink
              href='/get-started'
              className='inline-block mt-4 font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800'
            >
              Get started
            </NavLink>
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default CTA;
