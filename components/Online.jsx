import styles from '../styles/Online.module.scss'
import onlineImg from '../public/assets/onlineImg.png'
import logo1 from '../public/assets/onlineLogo1.png'
import logo2 from '../public/assets/onlineLogo2.png'
import Image from 'next/image'

const Online = () => {
  return (
    <main className={styles.onlineBg}>
      <div className={styles.left}>
        <Image src={onlineImg} alt="meeting" />
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          <h3>Help Finding Information Online</h3>
          <p>
            Fully customizable and neatly organized components will help you
            work faster without limiting creative freedom.
          </p>
        </div>
        <div className={styles.bottom}>
          <div>
            <Image src={logo1} alt="logo" />
            <h3>Feature One</h3>
            <p>
              Fully customizable and neatly organized components will help you
              work faster
            </p>
          </div>
          <div>
            <Image src={logo2} alt="logo" />
            <h3>Feature Two</h3>
            <p>
              Fully customizable and neatly organized components will help you
              work faster
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Online
