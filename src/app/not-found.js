import Link from 'next/link';
import './globals.css';
export default function Custom404() {
  return (
    <div className="not_found">
      <img src="/images/404.svg" alt="Web illustrations by Storyset" />
      <Link href="/">
        <h1>RETOUR</h1>
      </Link>
    </div>
  );
}
