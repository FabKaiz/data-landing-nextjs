import styles from '../styles/Features.module.scss'

import logo1 from '../public/assets/featureLogo1.png'
import logo2 from '../public/assets/featureLogo2.png'
import logo3 from '../public/assets/featureLogo3.png'
import logo4 from '../public/assets/featureLogo4.png'
import logo5 from '../public/assets/featureLogo5.png'
import logo6 from '../public/assets/featureLogo6.png'
import FeaturesCard from './FeaturesCard'

const Features = () => {
  return (
    <main className={styles.features}>
      <h2>Your choice</h2>
      <p>
        There are many reasons to get down and start to get depressed about your
        situation.
      </p>

      <div className={styles.featuresContainer}>
        <FeaturesCard
          logo={logo1}
          title="Ecstatic elegance"
          description="Article nor prepare chicken you him now. Shy merits say advice ten before lovers innate add."
        />
        <FeaturesCard
          logo={logo2}
          title="Folly words widow"
          description="Effect if in up no depend seemed. Ecstatic elegance gay but disposed. We me rent been part what."
        />
        <FeaturesCard
          logo={logo3}
          title="Possible procured trifling"
          description="We me rent been part what. An concluded sportsman offending so provision mr education."
        />
        <FeaturesCard
          logo={logo4}
          title="Open game"
          description="Shy merits say advice ten before lovers innate add. She cordially behaviour can attempted estimable."
        />
        <FeaturesCard
          logo={logo5}
          title="Endeavor"
          description="Improve ashamed married expense bed her comfort pursuit mrs. Four time took ye your as fail lady. "
        />
        <FeaturesCard
          logo={logo6}
          title="Comfort pursuit"
          description="Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug."
        />
      </div>
    </main>
  )
}

export default Features
