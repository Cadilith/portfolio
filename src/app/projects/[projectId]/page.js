'use client';
import Image from 'next/image';
import styles from './page.module.css';
import datas from '/json/projets.json';

export default function Projects({ params }) {
  const data = datas.filter((d) => d.id === params.projectId);
  return (
    <main className={styles.main}>
      <h1>{data[0].title}</h1>
      <article className={styles.project}>
        <h2 className={styles.project__title}>{data[0].title}</h2>
        <h3 className={styles.project__subtitle}>{data[0].subtitle}</h3>
        <table>
          <tbody>
            <tr>
              <td>{data[0].description1}</td>
              <td>
                <Image
                  src={data[0].pictures[0]}
                  height={400}
                  width={500}
                  alt="project preview"
                />
              </td>
            </tr>
            <tr>
              <td>
                <Image
                  src={data[0].pictures[1]}
                  height={200}
                  width={500}
                  alt="project preview"
                />
              </td>
              <td rowSpan="2">{data[0].description2}</td>
            </tr>
            <tr>
              <td>
                <Image
                  src={data[0].pictures[2]}
                  height={200}
                  width={500}
                  alt="project preview"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <a href={data[0].repository}>Link to repository</a>
      </article>
    </main>
  );
}
