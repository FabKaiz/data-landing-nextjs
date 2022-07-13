import styles from '../styles/Business.module.scss'
import businessImg from '../public/assets/businessImg.png'
import Image from 'next/image'

const Business = () => {
  return (
    <main className={styles.businessContainer}>
      <div className={styles.left}>
        <h2>
          Invest property for better <span className="orangeTxt">business</span>
        </h2>
        <p>
          We are committed to processing the information in order to contact you
          and talk about your project. We are committed to processing the
          information.
        </p>
        <button className="btnFull">learn more</button>
      </div>
      <div className={styles.right}>
        <Image src={businessImg} alt="business" />
      </div>
    </main>
  )
}

export default Business
