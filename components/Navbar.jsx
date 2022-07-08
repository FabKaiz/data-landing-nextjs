import styles from '../styles/Navbar.module.scss'
import logo from '../public/assets/headerLogo.png'
import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navLinks}>
        <Image src={logo} classname={styles.logo} alt="logo" />
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#gallery">gallery</a>
          </li>
          <li>
            <a href="#pricing">pricing</a>
          </li>
          <li>
            <a href="#faq">faq</a>
          </li>
          <li>
            <a href="#benefits">benefits</a>
          </li>
        </ul>
      </div>

      <div className={styles.navBtns}>
        <button className="btnTransparent">Sign in</button>
        <button className="btnFull">Sign up</button>
      </div>
      <GiHamburgerMenu className={styles.burgerMenu} />
    </nav>
  )
}

export default Navbar
