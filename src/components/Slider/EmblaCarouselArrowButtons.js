'useclient';
import React, { useCallback, useEffect, useState } from 'react';
import styles from './Slider.module.css';

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className={styles.embla__button + ' ' + styles.embla__button__prev}
      type="button"
      {...restProps}
    >
      <svg
        className={styles.embla__button__svg}
        fill="currentColor"
        viewBox="-2.4 -2.4 28.80 28.80"
        xmlns="http://www.w3.org/2000/svg"
        stroke="current"
        strokeWidth="0.40800000000000003"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#CCCCCC"
          strokeWidth="0.096"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {' '}
          <title>chevron-up</title>{' '}
          <polygon points="21.1 18.7 12 9.6 2.9 18.7 0.1 15.8 12 3.9 23.9 15.8 21.1 18.7"></polygon>{' '}
        </g>
      </svg>
      {children}
    </button>
  );
};

export const NextButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className={styles.embla__button + ' ' + styles.embla__button__next}
      type="button"
      {...restProps}
    >
      <svg
        className={styles.embla__button__svg}
        fill="currentColor"
        viewBox="-2.4 -2.4 28.80 28.80"
        xmlns="http://www.w3.org/2000/svg"
        stroke="current"
        strokeWidth="0.40800000000000003"
        transform="rotate(180)"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#CCCCCC"
          strokeWidth="0.096"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {' '}
          <title>chevron-up</title>{' '}
          <polygon points="21.1 18.7 12 9.6 2.9 18.7 0.1 15.8 12 3.9 23.9 15.8 21.1 18.7"></polygon>{' '}
        </g>
      </svg>
      {children}
    </button>
  );
};
