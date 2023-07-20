'use client';
import Image from 'next/image';
import styles from './page.module.css';
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
          <section className={styles.project__img}>
            <Image
              src={data[0].pictures[0]}
              height={350}
              width={800}
              alt="project preview"
            />
          </section>
          <section className={styles.project__img}>
            <Image
              src={data[0].pictures[1]}
              height={175}
              width={800}
              alt="project preview"
            />
            <Image
              src={data[0].pictures[2]}
              height={175}
              width={800}
              alt="project preview"
            />
          </section>
          <section className={styles.project__text}>
            <p>{data[0].description2}</p>
          </section>
        </div>
        <a href={data[0].repository}>Link to repository</a>
      </article>
    </main>
  );
}
