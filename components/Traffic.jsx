import styles from '../styles/Traffic.module.scss'
import mettricImg from '../public/assets/traficImg.png'
import Image from 'next/image'

const Traffic = () => {
  return (
    <main className={styles.trafficBg}>
      <div className={styles.top}>
        <div className={styles.left}>
          <h2>
            Increase your business <span className="orangeTxt">traffic</span>
          </h2>
          <p>
            We are committed to processing the information in order to contact
            you and talk about your project.
          </p>
        </div>
        <div className={styles.right}>
          <Image src={mettricImg} alt="mettric" />
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.desc}>
          <h2>
            3 Simple Ways To <span className="orange">Save</span> A Bunch Of{' '}
            <span className="orange">Money</span> When Buying A New Computer
          </h2>
          <p>
            Fully customizable and neatly organized components will help you
            work faster without limiting creative freedom.
          </p>
        </div>
        <div className={styles.mettricContainer}>
          <div>
            <h3>100+</h3>
            <p>5 Reasons To Purchase Desktop Computers</p>
          </div>
          <div>
            <h3>43,000+</h3>
            <p>
              3 Simple Ways To Save A Bunch Of Money When Buying A New Computer
            </p>
          </div>
          <div>
            <h3>30+</h3>
            <p>
              A Discount Toner Cartridge Is Better Than Ever And You Will Save
              50 Or More
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Traffic
