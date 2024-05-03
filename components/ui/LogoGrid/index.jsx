'use client';

import Image from 'next/image';
import freshbooks from '../../../public/logos/freshbooks.svg';
import sendgrid from '../../../public/logos/sendgrid.svg';
import layers from '../../../public/logos/layers.svg';
import adobe from '../../../public/logos/adobe.svg';
import freshbooksLight from '../../../public/logos/freshbooks-light.svg';
import sendgridLight from '../../../public/logos/sendgrid-light.svg';
import layersLight from '../../../public/logos/layers-light.svg';
import adobeLight from '../../../public/logos/adobe-light.svg';

import { motion } from 'framer-motion';
import {
  staggerContainer,
  textVariant,
  textVariant2,
} from '../../../utils/motion';

const logos = [
  {
    src: freshbooks,
    srcLight: freshbooksLight,
    alt: 'freshbooks',
  },
  {
    src: sendgrid,
    srcLight: sendgridLight,
    alt: 'sendgrid',
  },
  {
    src: layers,
    srcLight: layersLight,
    alt: 'layers',
  },
  {
    src: adobe,
    srcLight: adobeLight,
    alt: 'adobe',
  },
];

const LogoGrid = ({ isDarkMode }) => (
  <div>
    <motion.div
      className='custom-screen'
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.h2
        className='font-semibold text-sm text-gray-600 text-center uppercase dark:text-gray-300'
        variants={textVariant(1)}
        initial='hidden'
        animate='show'
      >
        Some of the companies I worked with
      </motion.h2>
      <div className='mt-6'>
        <ul className='flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16'>
          {logos.map((item, idx) => (
            <motion.li
              key={idx}
              variants={textVariant2(1.1)}
              initial='hidden'
              animate='show'
            >
              <Image
                src={isDarkMode ? item.srcLight : item.src}
                alt={item.alt}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  </div>
);

export default LogoGrid;
