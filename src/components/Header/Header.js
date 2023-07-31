import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
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
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/about">À propos</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
