import Image from "next/image";
import { useState } from "react";
import styles from "./Gallery.module.scss";

const gallery = [
  "image-slide-1.jpg",
  "image-slide-2.jpg",
  "image-slide-3.jpg",
  "image-slide-4.jpg",
  "image-slide-5.jpg",
];
export const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(1);

  const handleClickRight = () => {
    if (currentImage === gallery.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };
  const handleClickLeft = () => {
    if (currentImage === 0) {
      setCurrentImage(gallery.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };
  const before = currentImage === 0 ? 4 : currentImage - 1;
  const after = currentImage === 4 ? 1 : currentImage + 1;

  return (
    <div className={styles.gallery}>
      <h2>My Work</h2>

      <div className={styles.galleryContainer}>
        <div className={styles.images}>
          <div className={styles.image}>
            <Image
              src={`/assets/${gallery[before]}`}
              layout="responsive"
              width={800}
              height={500}
              alt="im"
            />
          </div>
          <div className={styles.image}>
            <Image
              src={`/assets/${gallery[currentImage]}`}
              layout="responsive"
              width={800}
              height={500}
              alt="im"
            />
          </div>
          <div className={styles.image}>
            <Image
              src={`/assets/${gallery[after]}`}
              layout="responsive"
              width={800}
              height={500}
              alt="im"
            />
          </div>
        </div>
      </div>

      {/* arrows */}

      <div className={styles.arrows}>
        <button
          role="button"
          aria-pressed='false'
          className={styles.btnArrows}
          onClick={handleClickLeft}
        >
          <span className={styles.position}>
            <Image
              src="/assets/icon-arrow-left.svg"
              layout="responsive"
              width={10}
              height={10}
              alt="arrow left"
            />
          </span>
        </button>
        <button
          role="button"
          className={styles.btnArrows}
          onClick={handleClickRight}
        >
          <span className={styles.position}>
            <Image
              src="/assets/icon-arrow-right.svg"
              layout="responsive"
              width={10}
              height={10}
              alt="arrow right"
            />
          </span>
        </button>
      </div>
    </div>
  );
};
