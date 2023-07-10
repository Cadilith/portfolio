import './globals.css';
import { Abel } from 'next/font/google';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Slider from '../components/Slider/Slider';

const abel = Abel({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata = {
  title: 'Web developer portfolio - Tiffanie Orsoni',
  description: "I'm a junior web developer who yearns to learn more",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={abel.className}>
        <Header />
        <div className="container">
          {children}
          <Slider />
        </div>
        <Footer />
      </body>
    </html>
  );
}
