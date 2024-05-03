'use client';

import { useState } from 'react';
import Footer from '../components/ui/Footer';
import Navbar from '../components/ui/Navbar';

const Main = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className='dark:bg-gray-800'>
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      <main isDarkMode={isDarkMode}>{children}</main>
      <Footer />
    </div>
  );
};

export default Main;
