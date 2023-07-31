import './globals.css';
import { Barlow_Semi_Condensed } from 'next/font/google';
import EmblaCarousel from '../components/Slider/EmblaCarousel';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import data from '/json/projets.json';

//Font import
const barlowSemi = Barlow_Semi_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  preload: false,
});

export const metadata = {
  title: 'Web developer portfolio - Tiffanie Orsoni',
  description:
    "Portfolio de Tiffanie Orsoni, 36 ans, développeuse front-end junior passionnée et motivée. J'aimerais renforcer mes compétences à vos côtés. Parlons-en !",
  keywords: [
    'tiffanie orsoni',
    'web',
    'développeur',
    'portfolio',
    'france',
    'junior',
    'aurillac',
  ],
  creator: 'Tiffanie Orsoni',
  openGraph: {
    title: 'Web developer portfolio - Tiffanie Orsoni',
    image: '/images/ogimage.png',
    type: 'website',
    description:
      "Portfolio de Tiffanie Orsoni, 36 ans, développeuse front-end junior passionnée et motivée. J'aimerais renforcer mes compétences à vos côtés. Parlons-en !",
  },
  twitter: {
    title: 'Web developer portfolio - Tiffanie Orsoni',
    image: '/images/ogimage.png',
    description:
      "Portfolio de Tiffanie Orsoni, 36 ans, développeuse front-end junior passionnée et motivée. J'aimerais renforcer mes compétences à vos côtés. Parlons-en !",
  },
};

//Slider options
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
    <html lang="fr">
      <body className={barlowSemi.className}>
        <Header />
        <div className="container">
          {children}
          <aside>
            <h2>PROJETS</h2>
            <EmblaCarousel data={data} options={OPTIONS} />
          </aside>
        </div>
        <Footer />
      </body>
    </html>
  );
}
