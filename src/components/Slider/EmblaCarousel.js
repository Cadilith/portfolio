'use client';
import styles from './Slider.module.css';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons';
// import imageByIndex from './imageByIndex';

export default function EmblaCarousel(props) {
  const { data, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

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
              <Image
                className={styles.embla__slide__logo}
                src={d.logo}
                alt={d.title + ' logo'}
                height={70}
                width={230}
              />
              <Image
                className={styles.embla__slide__img}
                src={d.cover}
                alt={d.title}
                width={380}
                height={480}
                quality={90}
              />
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
