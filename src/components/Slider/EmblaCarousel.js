'use client';
import styles from './Slider.module.css';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons';

import Image from 'next/image';
import Link from 'next/link';

const autoplayOptions = {
  delay: 5000,
};

export default function EmblaCarousel(props) {
  const { data, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay(autoplayOptions),
  ]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {data.map((d, index) => (
            <div className={styles.embla__slide} key={d.id + index}>
              <Link key={d.id} href={`/projects/${d.id}`}>
                <Image
                  className={styles.embla__slide__logo}
                  src={d.logo}
                  alt={d.title + ' logo'}
                  width={0}
                  height={0}
                  priority
                />
                <Image
                  className={styles.embla__slide__img}
                  src={d.cover}
                  alt={d.title}
                  width={380}
                  height={480}
                  quality={90}
                  priority
                />
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.embla__buttons}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
}
