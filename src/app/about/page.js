import styles from './about.module.css';
import about from '../../../json/apropos.json';

export default function About() {
  return (
    <main className={styles.main}>
      <h1>À propos</h1>
      <div className={styles.about__container}>
        <div className={styles.about__intro}>
          <p>{about.intro}</p>
        </div>
        <div className={styles.about__stack}>
          <h2>MES COMPÉTENCES</h2>
          <div className={styles.about__stack__logos}>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>Next.js</p>
            <p>SASS</p>
            <p>Express</p>
            <p>MongoDB</p>
            <p>Node.js</p>
            <p>GIT</p>
            <p>Github</p>
            <p>SEO</p>
            <p>Responsive Design</p>
          </div>
          <a
            href={about.resume}
            target="_blank"
            aria-label="Download full resume"
          >
            Téléchargez mon CV
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>file_pdf [#1729]</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-140.000000, -1399.000000)"
                  fill="currentColor"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M97.9792,1239.0005 L84.0002,1239.0005 L84.0002,1249.0005 L86.0002,1249.0005 L86.0002,1241.0005 L96.0002,1241.0005 L96.0002,1247.0005 L102.0002,1247.0005 L102.0002,1249.0005 L104.0002,1249.0005 L104.0002,1245.4385 L97.9792,1239.0005 Z M88.0002,1254.1055 C88.0002,1253.5525 87.5522,1253.1055 87.0002,1253.1055 L86.0002,1253.1055 L86.0002,1255.1055 L87.0002,1255.1055 C87.5522,1255.1055 88.0002,1254.6575 88.0002,1254.1055 L88.0002,1254.1055 Z M90.0002,1254.0005 C90.0002,1255.6575 88.6572,1257.0005 87.0002,1257.0005 L86.0002,1257.0005 L86.0002,1259.0005 L84.0002,1259.0005 L84.0002,1251.0005 L87.0002,1251.0005 C88.6572,1251.0005 90.0002,1252.3435 90.0002,1254.0005 L90.0002,1254.0005 Z M95.0002,1254.1055 C95.0002,1253.5525 94.5522,1253.0005 94.0002,1253.0005 L93.0002,1253.0005 L93.0002,1257.0005 L94.0002,1257.0005 C94.5522,1257.0005 95.0002,1256.6575 95.0002,1256.1055 L95.0002,1254.1055 Z M97.0002,1254.0005 L97.0002,1256.0005 C97.0002,1257.6575 95.6572,1259.0005 94.0002,1259.0005 L91.0002,1259.0005 L91.0002,1257.1055 L91.0002,1253.1055 L91.0002,1251.0005 L94.0002,1251.0005 C95.6502,1251.0005 97.0002,1252.3505 97.0002,1254.0005 L97.0002,1254.0005 Z M104.0002,1251.0005 L104.0002,1253.0005 L100.0002,1253.0005 L100.0002,1255.0005 L104.0002,1255.0005 L104.0002,1257.0005 L100.0002,1257.0005 L100.0002,1259.0005 L98.0002,1259.0005 L98.0002,1251.0005 L104.0002,1251.0005 Z"
                      id="file"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}
