import styles from '../styles/Newsletter.module.scss'

const Newsletter = () => {
  return (
    <section className={styles.newsletterBg}>
      <div className={styles.newsletterContainer}>
        <h2>There are many reasons to get down</h2>
        <h5>
          There are many reasons to get down and start to get depressed about
          your situation.{' '}
        </h5>
        <div>
          <input type="text" placeholder="Your Email" />
          <button className={styles.newsletterBtn}>send</button>
        </div>
        <p>No spam. Only releases, updates and discounts</p>
      </div>
    </section>
  )
}

export default Newsletter
