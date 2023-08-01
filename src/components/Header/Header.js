'use client';
import styles from './Header.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  // get current route
  const currentRoute = usePathname();

  return (
    <header className={styles.header}>
      <h1 className="logo">
        T<span className={styles.italic}>i</span>ffan
        <span className={styles.italic}>i</span>e Orson
        <span className={styles.italic}>i</span>
      </h1>
      <nav>
        <div className={styles.block}>
          <div className={styles.arrow}></div>
        </div>
        <ul>
          <li
            className={
              currentRoute === '/' ? styles.active_link : 'nonactive-link'
            }
          >
            <Link href="/">Accueil</Link>
          </li>
          <li
            className={
              currentRoute === '/about' ? styles.active_link : 'nonactive-link'
            }
          >
            <Link href="/about">À propos</Link>
          </li>
          <li
            className={
              currentRoute === '/contact'
                ? styles.active_link
                : 'nonactive-link'
            }
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
