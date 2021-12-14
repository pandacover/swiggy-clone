import styles from './Features.module.css';

export const Features = () => {
  return (
    <div className={styles.featureContainer}>
      <div className={styles.featureWrapper}>
        <section className={styles.featureSection}>
          <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf" alt="bruh" />
          <p className={styles.featureTitle}>No Minimum Order</p>
          <p className={styles.featureText}>Order in for yourself or for the group, with no restrictions on order value</p>
        </section>
        <section className={styles.featureSection}>
          <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy" alt="bruh" />
          <p className={styles.featureTitle}>Live Order Tracking</p>
          <p className={styles.featureText}>Know where your order is at all times, from the restaurant to your doorstep</p>
        </section>
        <section className={styles.featureSection}>
          <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn" alt="bruh" />
          <p className={styles.featureTitle}>Lightning-Fast Delivery</p>
          <p className={styles.featureText}>Experience Swiggy's superfast delivery for food delivered fresh & on time</p>
        </section>
      </div>
    </div>
  )
}