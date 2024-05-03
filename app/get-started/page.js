'use client';

import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import Checkbox from '../../components/ui/Checkbox';
import SectionWrapper from '../../components/SectionWrapper';

export default function GetStarted() {
  const servicesItems = [
    'Mobile development',
    'UI/UX Design',
    'web development',
    'SEO',
  ];

  return (
    <SectionWrapper>
      <div className='pt-28 pb-12'>
        <div className='custom-screen text-gray-600'>
          <div className='max-w-lg mx-auto lg:flex '>
            <div className='max-w-lg text-left '>
              <h1 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                Contact me for a work
              </h1>
              <p className='mt-3 p'>
                I am here to help. Get in touch with me or my team and let me
                know how I can help, or shoot me an email on{' '}
                <a
                  href='mailto:johndoe@gmail.com'
                  target='_blank'
                  rel='noreferrer'
                  className='text-indigo-600 hover:text-indigo-400 font-medium duration-150'
                >
                  johndoe@gmail.com.
                </a>
              </p>
            </div>
            <div className='mt-12 sm:max-w-lg lg:mt-0 form-container'>
              <form className='space-y-5 font-medium '>
                <div>
                  <label>Full name</label>
                  <Input
                    aria-label='Full name'
                    type='text'
                    required
                    className='mt-2 focus:border-indigo-600'
                  />
                </div>
                <div>
                  <label>Email</label>
                  <Input
                    aria-label='Email'
                    type='email'
                    required
                    className='mt-2 focus:border-indigo-600'
                  />
                </div>
                <div>
                  <label>Message</label>
                  <textarea
                    aria-label='Message'
                    required
                    className='w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
                  ></textarea>
                </div>
                <div>
                  <label>Service</label>
                  <ul className='mt-3 font-normal max-w-md contact-service'>
                    {servicesItems.map((item, idx) => (
                      <li key={idx}>
                        <Checkbox id={`service-${idx}`} />
                        <label
                          htmlFor={`service-${idx}`}
                          className='text-sm'
                        >
                          {item}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='pt-1'>
                  <Button className='w-full text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 ring-offset-2 ring-indigo-600 focus:ring'>
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}