import './globals.css';
import { Barlow_Semi_Condensed } from 'next/font/google';
import EmblaCarousel from '../components/Slider/EmblaCarousel';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Loading from './loading';
import data from '/json/projets.json';
import { Suspense } from 'react';

//Font import
const barlowSemi = Barlow_Semi_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  preload: false,
});

export const metadata = {
  title: 'Web developer portfolio - Tiffanie Orsoni',
  description:
    "Je suis Tiffanie Orsoni, 36 ans, développeuse front-end junior passionnée et motivée. J'aimerais renforcer mes compétences à vos côtés. Parlons-en !",
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
    url: 'www.tiffanieorsoni.com',
    title: 'Web developer portfolio - Tiffanie Orsoni',
    images: ['/images/ogimage.png', '/images/og1.png'],
    type: 'website',
    description:
      "Je suis Tiffanie Orsoni, 36 ans, développeuse front-end junior passionnée et motivée. J'aimerais renforcer mes compétences à vos côtés. Parlons-en !",
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
          {/* <!-- Google tag (gtag.js) --> */}
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-E3LLQ254Q9" />
          <Script id="google-analytics">
            {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-E3LLQ254Q9');`}
          </Script>
          {children}
          <aside>
            <div className="aside__title__container">
              <h2>PROJETS</h2>
            </div>
            <EmblaCarousel data={data} options={OPTIONS} />
          </aside>
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
