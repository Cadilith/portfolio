import Image from 'next/image';
import styles from './project.module.css';
import datas from '/json/projets.json';

export default function Projects({ params }) {
  const data = datas.filter((d) => d.id === params.projectId);

  return (
    <main className={styles.main}>
      <div className={styles.main__title__wrapper}>
        <h1>{data[0].title}</h1>
      </div>
      <article className={styles.project}>
        <h2 className={styles.project__title}>{data[0].title}</h2>
        <h3 className={styles.project__subtitle}>{data[0].subtitle}</h3>
        <div className={styles.project__wrapper}>
          <section className={styles.project__text}>
            <p>{data[0].description1}</p>
          </section>
          <section className={`${styles.project__img} ${styles.img1}`}>
            <Image
              src={data[0].pictures[0]}
              height={350}
              width={800}
              quality={90}
              priority={true}
              alt="project preview 1"
            />
          </section>
          <section className={`${styles.project__img} ${styles.img2}`}>
            <Image
              src={data[0].pictures[1]}
              height={350}
              width={800}
              quality={90}
              priority={true}
              alt="project preview 2"
            />
          </section>
          <section className={styles.project__text}>
            <p>{data[0].description2}</p>
            <p className={styles.project__link}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="currentColor"
              >
                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z" />
              </svg>{' '}
              <a href={data[0].repository} target="_blank">
                Voir le repo Github
              </a>
            </p>
            {data[0].link && (
              <p className={styles.project__link}>
                <svg
                  version="1.0"
                  id="Layer_1"
                  viewBox="-4 0 73 64"
                  enableBackground="new 0 0 66 66"
                  fill="currentColor"
                >
                  <g strokeWidth="0"></g>
                  <g strokeLinecap="round" strokeLinejoin="round"></g>
                  <g>
                    {' '}
                    <g>
                      {' '}
                      <path
                        fill=""
                        d="M60,0H4C1.789,0,0,1.789,0,4v56c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4V4C64,1.789,62.211,0,60,0z M53,54H11c-0.553,0-1-0.447-1-1s0.447-1,1-1h42c0.553,0,1,0.447,1,1S53.553,54,53,54z M53,48H11c-0.553,0-1-0.447-1-1s0.447-1,1-1 h42c0.553,0,1,0.447,1,1S53.553,48,53,48z M11,28h18c0.553,0,1,0.447,1,1s-0.447,1-1,1H11c-0.553,0-1-0.447-1-1S10.447,28,11,28z M10,23c0-0.553,0.447-1,1-1h18c0.553,0,1,0.447,1,1s-0.447,1-1,1H11C10.447,24,10,23.553,10,23z M11,34h18c0.553,0,1,0.447,1,1 s-0.447,1-1,1H11c-0.553,0-1-0.447-1-1S10.447,34,11,34z M11,40h18c0.553,0,1,0.447,1,1s-0.447,1-1,1H11c-0.553,0-1-0.447-1-1 S10.447,40,11,40z M54,41c0,0.553-0.447,1-1,1H35c-0.553,0-1-0.447-1-1V23c0-0.553,0.447-1,1-1h18c0.553,0,1,0.447,1,1V41z M62,12 H2V4c0-1.104,0.896-2,2-2h56c1.104,0,2,0.896,2,2V12z"
                      ></path>{' '}
                      <path
                        fill=""
                        d="M7,4C5.343,4,4,5.343,4,7s1.343,3,3,3s3-1.343,3-3S8.657,4,7,4z M7,8C6.447,8,6,7.553,6,7s0.447-1,1-1 s1,0.447,1,1S7.553,8,7,8z"
                      ></path>
                      <path
                        fill=""
                        d="M33,4H15c-1.657,0-3,1.343-3,3s1.343,3,3,3h18c1.657,0,3-1.343,3-3S34.657,4,33,4z M33,8H15 c-0.553,0-1-0.447-1-1s0.447-1,1-1h18c0.553,0,1,0.447,1,1S33.553,8,33,8z"
                      ></path>{' '}
                    </g>{' '}
                  </g>
                </svg>
                <a href={data[0].link} target="_blank">
                  Voir la démo
                </a>
              </p>
            )}
          </section>
        </div>
      </article>
    </main>
  );
}
