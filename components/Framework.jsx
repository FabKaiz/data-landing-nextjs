import styles from '../styles/Framework.module.scss'
import frameworkBg from '../public/assets/frameworkBg.png'
import Image from 'next/image'

const Framework = () => {
  return (
    <main>
      <div className={styles.top}>
        <h2>
          Create your <span className="orangeTxt">next project</span> with
          startup framework
        </h2>
        <button className="btnFull">get Started</button>
      </div>
      <div className={styles.bottom}>
        <Image src={frameworkBg} alt="background" />
      </div>
    </main>
  )
}

export default Framework
