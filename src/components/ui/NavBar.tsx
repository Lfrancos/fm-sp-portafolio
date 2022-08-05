import Image from "next/image";
import styles from "./NavBar.module.scss";
import { Button } from "./Button";

const NavBar = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.logoContainer}>
        <Image
          src="/assets/logo.svg"
          alt="logo"
          layout="responsive"
          height={48}
          width={48}
        />
      </div>
      <Button name={"Free consultation"} color="black" />
    </nav>
  );
};

export default NavBar;
