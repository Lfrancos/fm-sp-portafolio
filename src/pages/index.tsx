import type { NextPage } from "next";
import Image from "next/image";
import { MainLayout } from "../components/layouts/MainLayout";
import styles from "./index.module.scss";
import Data from "../data/mosaic.json" assert {type: 'json'};

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

        {/* this is the mosaic
          if you want to change the dimensions or name or anything you should do it from the data JSON file
        */}

        <div className={styles.mosaic}>
          {Data.mosaic.map(({className, name, width, height, img}) => {
            return (
              <div key={className} className={`${styles.gridItem} ${styles[className]}`}>
                <div className={`${styles.image} `}>
                  <Image
                    src={`/assets/${img}`}
                    alt={`${name} logo`}
                    height={height}
                    width={width}
                  />
                </div>
                <h2 className={styles.text}>{name}</h2>
              </div>
            );
          })}
        </div>
      </>
    </MainLayout>
  );
};

export default Home;
