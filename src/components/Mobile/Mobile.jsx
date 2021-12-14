import styles from './Mobile.module.css';

export const Mobile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <section className={styles.textSection}>
          <h3 className={`fn-large ${styles.title}`}>Restaurants in your pocket</h3>
          <p className={styles.text}>Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</p>
          <section className={styles.icon}>
            <img src="/assets/play_icon.png" alt="icon" />
            <img src="/assets/iOS_icon.png" alt="icon" />
          </section>
        </section>
        <section className={styles.imageSection}>
          <img src="/assets/pixel1.png" alt="mobile" />
          <img src="/assets/pixel2.png" alt="mobile" />
        </section>
      </div>
    </div>
  )
}