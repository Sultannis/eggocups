"use client";

import { useCallback } from "react";
import Image from "next/image";
import styles from "./card.module.css";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

const Card = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.emblaContainer}>
            <div className={styles.emblaSlide}>
              <Image
                src="/images/tenga-egg.webp"
                alt="Tenga Egg"
                width={360}
                height={360}
                priority
              />
            </div>
            <div className={styles.emblaSlide}>
              <Image
                src="/images/tenga-2.webp"
                alt="Tenga Egg"
                width={360}
                height={360}
                priority
              />
            </div>
            <div className={styles.emblaSlide}>
              <Image
                src="/images/tenga-3.jpg"
                alt="Tenga Egg"
                width={360}
                height={360}
                priority
              />
            </div>
          </div>
        </div>
        <button className={styles.emblaPrev} onClick={scrollPrev}>
          ❮
        </button>
        <button className={styles.emblaNext} onClick={scrollNext}>
          ❯
        </button>
        <div className={styles.emblaDots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`${styles.emblaDot}`.concat(
                index === selectedIndex ? ` ${styles.emblaDotSelected}` : ""
              )}
            />
          ))}
        </div>
      </div>
      <h3 className={styles.title}>Tenga egg</h3>
      <p className={styles.text}>9.99 usd/pcs</p>
    </div>
  );
};

export default Card;
