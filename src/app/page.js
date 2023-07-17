import styles from './page.module.css';
import homeContent from '../../json/home.json';
import Image from 'next/image';

export default function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.arrow}>
        <svg
          fill="currentColor"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          transform="rotate(-45)"
          stroke="currentColor"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M14.496 5.975l-.001 14.287-6.366-6.367L6 16.021l10.003 10.004L26 16.029 23.871 13.9l-6.366 6.368V5.977z"></path>
          </g>
        </svg>
      </div>
      <article className={styles.home__about}>
        <div className={styles.home__about__title__container}>
          <div className={styles.home__about__title}>
            <h2>{homeContent.title}</h2>
            <h3>{homeContent.subtitle}</h3>
          </div>
          <div className={styles.home__about__portrait}>
            <div className={styles.home__portrait__square}>
              <Image
                src="/images/portrait.webp"
                fill={true}
                alt="Tiffanie Orsoni"
              />
            </div>
          </div>
        </div>
        <p>{homeContent.text}</p>
      </article>
    </main>
  );
}
