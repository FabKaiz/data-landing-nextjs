import styles from '../styles/Header.module.scss'
import Image from 'next/image'

import headerImg from '../public/assets/headerImg.png'
import headerVideo from '../public/assets/headerVideo.png'
import sponsor1 from '../public/assets/headerSponsor1.svg'
import sponsor2 from '../public/assets/headerSponsor2.svg'
import sponsor3 from '../public/assets/headerSponsor3.svg'
import sponsor4 from '../public/assets/headerSponsor4.svg'
import sponsor5 from '../public/assets/headerSponsor5.svg'
import sponsor6 from '../public/assets/headerSponsor6.svg'
import Features from './Features'

const Header = () => {
  return (
    <header>
      <div className={styles.headerContainer}>
        <div className={styles.left}>
          <h1>Many reasons to get up and start to get back in the business </h1>
          <p>
            The harder you work for something, the greater you’ll feel when you
            achieve it.
          </p>
          <div className={styles.btns}>
            <button className="btnFull">LEARN MORE</button>
            <button className="btnTransparent">DEMO</button>
          </div>
          <div className={styles.videoContainer}>
            <Image
              src={headerVideo}
              layout="fixed"
              width={140}
              height={80}
              alt="video fake"
            />
            <div className={styles.videoText}>
              <p>
                The harder you work for something, the greater you’ll feel when
                you achieve it.
              </p>
              <p>Watch preview</p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <Image src={headerImg} alt="running logo" />
        </div>
      </div>
      <div className={styles.featuresBg}>
        <div className={styles.headerSponsor}>
          <div>
            <Image src={sponsor1} alt="sponsor" />
            <Image src={sponsor2} alt="sponsor" />
            <Image src={sponsor3} alt="sponsor" />
            <Image src={sponsor4} alt="sponsor" />
            <Image src={sponsor5} alt="sponsor" />
            <Image src={sponsor6} alt="sponsor" />
          </div>
        </div>
        <Features />
      </div>

    </header>
  )
}

export default Header
