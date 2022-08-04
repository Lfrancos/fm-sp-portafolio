import type { NextPage } from "next";
import Image from "next/image";
import { MainLayout } from "../components/layouts/MainLayout";
import styles from "./index.module.scss";
import Data from "../data/data.json" assert { type: "json" };
import { Button } from "../components/ui/Button";
import { Gallery } from '../components/ui/Gallery';

const Home: NextPage = () => {
  return (
    <MainLayout title="Portfolio">
      <>
        <div className={styles.intro}>
          <h1>Design solution made easy</h1>
          <p>
            Whit over ten years of experience in various design disciplines,
            I&apos;m your one-stop shop for your design needs.
          </p>
        </div>

        {/* this is the grid of skills
          if you want to change the dimensions or name or anything you should do it from the data JSON file
        */}

        <div className={styles.mosaic}>
          {Data.grid.map(({ className, name, width, height, img }) => {
            return (
              <div
                key={className}
                className={`${styles.gridItem} ${styles[className]}`}
              >
                <div className={`${styles.image} `}>
                  <Image
                    src={`/assets/${img}`}
                    alt={`${name} logo`}
                    height={height}
                    width={width}
                  />
                </div>
                <h3 className={styles.text}>{name}</h3>
              </div>
            );
          })}
        </div>

        {/* this is the about section */}

        <div className={`${styles.about}`}>
          <div className={styles.image}>
            <Image
              src="/assets/image-amy.webp"
              alt="amy"
              width={300}
              height={300}
            />
          </div>
          <div>
            <h2>
              I&apos;m Amy, and I&apos;d love to work on your next project
            </h2>
            <p>
              I love working with others to create beautiful design solutions.
              I&apos;ve designed everything from brand illustrations to complete
              mobile apps. I&apos;m also handy with a camera!
            </p>
            <Button name="Free Consultation" color="red" />
          </div>
        </div>

        {/* gallery */}

        <Gallery />

        {/* this is the bookings */}

        <div className={styles.bookings}>
          <h2>Book a call with me</h2>
          <p>
            I&apos;d love to have a chat to see how I can help you. The best first
            step is for us to discuss your project during a free consultation.
            Then we can move forward from there.
          </p>
          <Button name="Free Consultation" color="red" />
        </div>
      </>
    </MainLayout>
  );
};

export default Home;
