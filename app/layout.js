import '../styles/globals.css';
import Main from './Main';

export const metadata = {
  title: 'John Doe - Fullstack Developer',
  description:
    "I'm a fullstack developer specializing on Next.js for more than 3 years now.",
};

export default function RootLayout({ children }) {
  return (
    <html
      className='scroll-smooth'
      lang='en'
    >
      <body className='dark:bg-gray-800'>
        <Main children={children} />
      </body>
    </html>
  );
}
