import Image from "next/image"
import styles from './NavBar.module.scss';
import { Button } from "./Button"


const NavBar = () => {
  return (
    <nav className={styles.navContainer}>
       <Image src="/assets/logo.svg" alt='logo' height={48} width={48} />
       <Button name={'Free consultation'} color='black' />
    </nav>
  )
}

export default NavBar