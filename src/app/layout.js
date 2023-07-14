import './globals.css';
import { Abel } from 'next/font/google';
import EmblaCarousel from '../components/Slider/EmblaCarousel';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import data from '/json/projets.json';

const abel = Abel({
  subsets: ['latin'],
  weight: ['400'],
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
    '(max-width: 768px)': { axis: 'x' },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={abel.className}>
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
