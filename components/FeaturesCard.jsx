import Image from 'next/image'
import styles from '../styles/FeaturesCard.module.scss'

const FeaturesCard = ({ logo, title, description }) => {
  return (
    <div className={styles.featuresCardContainer}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo" />
      </div>
      <div className={styles.txt}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default FeaturesCard
