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

    const [ currentImage , setCurrentImage] = useState(2);

    const handleClickRight = () => {
        if (currentImage === gallery.length - 1) {
            setCurrentImage(0);
        } else {
            setCurrentImage(currentImage + 1);
        }
    }
    const handleClickLeft = () => {
        if (currentImage === 0) {
            setCurrentImage(gallery.length - 1);
        } else {
            setCurrentImage(currentImage - 1);
        }
    }

  return (
    <div className={styles.gallery}>
      <h2>My Work</h2>

      <div className={styles.galleryContainer}>
        <div className={styles.images}>
          <div className={styles.image}>
            <Image
              src={`/assets/${gallery[currentImage - 1]}`}
              width={300}
              height={200}
              alt="im"
            />
          </div>
          <div className={styles.image}>
            <Image
              src={`/assets/${gallery[currentImage]}`}
              width={300}
              height={200}
              alt="im"
            />
          </div>
          <div className={styles.image}>
            <Image
              src={`/assets/${gallery[currentImage + 1]}`}
              width={300}
              height={200}
              alt="im"
            />
          </div>
        </div>
      </div>

      {/* arrows */}

      <div className={styles.arrows}>
        <div className={styles.btnArrows} onClick={ handleClickLeft }>
          <div className={styles.position}>
            <Image
              src="/assets/icon-arrow-left.svg"
              alt="arrow"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className={styles.btnArrows} onClick={ handleClickRight }>
          <div className={styles.position}>
            <Image
              src="/assets/icon-arrow-right.svg"
              alt="arrow"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
