import styles from '../styles/Footer.module.scss'
import googleLogo from '../public/assets/footerGoogle.png'
import twitterLogo from '../public/assets/footerTwitter.png'
import facebookLogo from '../public/assets/footerFacebook.png'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.socials}>
        <h2>FabKaiz</h2>
        <div className={styles.logoContainer}>
          <div>
            <Image src={googleLogo} alt="google logo" />
          </div>
          <div>
            <Image src={twitterLogo} alt="twitter logo" />
          </div>
          <div>
            <Image src={facebookLogo} alt="facebook logo" />
          </div>
        </div>
      </div>
      <div className={styles.links}>
        <div>
          <h5>First</h5>
          <ul>
            <li>First page</li>
            <li>Second page</li>
            <li>Third page</li>
            <li>Fourth page</li>
          </ul>
        </div>
        <div>
          <h5>Second</h5>
          <ul>
            <li>First page</li>
            <li>Second page</li>
            <li>Third page</li>
            <li>Fourth page</li>
          </ul>
        </div>
        <div>
          <h5>Third</h5>
          <ul>
            <li>First page</li>
            <li>Second page</li>
            <li>Third page</li>
            <li>Fourth page</li>
          </ul>
        </div>
        <div>
          <h5>Fourth</h5>
          <ul>
            <li>First page</li>
            <li>Second page</li>
            <li>Third page</li>
            <li>Fourth page</li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© Copyrights 2021</p>
        <p>Privacy policy</p>
        <p>Terms of service</p>
      </div>
    </footer>
  )
}

export default Footer
