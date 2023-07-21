import './globals.css';
import { Barlow_Semi_Condensed } from 'next/font/google';
import EmblaCarousel from '../components/Slider/EmblaCarousel';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import data from '/json/projets.json';

const barlowSemi = Barlow_Semi_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  preload: false,
});

export const metadata = {
  title: 'Web developer portfolio - Tiffanie Orsoni',
  description: "I'm a junior web developer always yearning to learn more",
};

const OPTIONS = {
  axis: 'y',
  loop: true,
  align: 'center',
  breakpoints: {
    '(max-width: 1020px)': { axis: 'x' },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={barlowSemi.className}>
        <Header />
        <div className="container">
          {children}
          <aside>
            <h2>Projects</h2>
            <EmblaCarousel data={data} options={OPTIONS} />
          </aside>
        </div>
        <Footer />
      </body>
    </html>
  );
}
