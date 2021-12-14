import styles from './Footer.module.css';
import { links, foot1, foot2, foot3, foot4 } from './Links';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export const Footer = () => {
  const [toggle, setToggle] = useState(false);
  
  const handleClick = e => {
    e.preventDefault();
    setToggle(!toggle);
  }

  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <section className={styles.footer}>
          {Object.entries(links).map(([key, obj], idx) => (
            <ul className={styles.section} key={idx}>
              <h4 className={`disabled ${key} ${styles.footTitle}`}>{key}</h4>
              { Object.entries(obj).map(([key, values], idx) => (
                <li className={styles.footerList} key={idx}>
                  <Link to={values}>{key}</Link>
                </li>
              ))}
            </ul>
          ))}
            <ul className={styles.icon}>
              <Link to="/"><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt="icon" /></Link>
              <Link to="/"><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="icon" /></Link>
            </ul>
        </section>
        <section className={styles.location}>
          <h4 className={`disabled ${styles.footTitle}`}>We Deliver to</h4>
          <section className={styles.locationWrap}
            style={toggle ? {maxHeight: "100%"} : {maxHeight: ""}}
          >
            <ul className={styles.locationList}>
              { foot1.map((link, idx) => (
                <li key={idx}>
                  <Link to="/">{link}</Link>
                </li>
              )) }
            </ul>
            <ul className={styles.locationList}>
              { foot2.map((link, idx) => (
                <li key={idx}>
                  <Link to="/">{link}</Link>
                </li>
              )) }
            </ul>
            <ul className={styles.locationList}>
              { foot3.map((link, idx) => (
                <li key={idx}>
                  <Link to="/">{link}</Link>
                </li>
              )) }
            </ul>
            <ul className={styles.locationList}>
              { foot4.map((link, idx) => (
                <li key={idx}>
                  <Link to="/">{link}</Link>
                </li>
              )) }
            </ul>
          </section>
          <button className={`btn ${styles.revealBtn}`} onClick={handleClick} >{toggle ? 'See Less' : 'See More'}</button>
        </section>
        <section className={styles.social}>
        <div>
        <img src="/assets/swiggy_foot.png" alt="Swiggy" />
        </div>
        <p><span>© 2021 Swiggy</span></p>
        <figure>
          <Link to="/"><img src="/assets/icon-facebook.png" alt="social_facebook" /></Link>
          <Link to="/"><img src="/assets/icon-pinterest.png" alt="social_pinterest" /></Link>
          <Link to='/'><img src="/assets/icon-instagram.png" alt="social_instagram" /></Link>
          <Link to="/"><img src="/assets/icon-twitter.png" alt="social_twitter" /></Link>
        </figure>
        </section>
      </div>
    </footer>
  )
}