import './globals.css';
import { Abel } from 'next/font/google';
import EmblaCarousel from '../components/Slider/EmblaCarousel';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const abel = Abel({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata = {
  title: 'Web developer portfolio - Tiffanie Orsoni',
  description: "I'm a junior web developer who yearns to learn more",
};

const OPTIONS = { axis: 'y', loop: true };
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={abel.className}>
        <Header />
        <div className="container">
          {children}
          <aside>
            <h2>Projects</h2>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </aside>
        </div>
        <Footer />
      </body>
    </html>
  );
}
