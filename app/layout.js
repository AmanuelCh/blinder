import Footer from '../components/ui/Footer';
import Navbar from '../components/ui/Navbar';
import '../styles/globals.css';

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
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
