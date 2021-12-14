import styles from './Hero.module.css';
import { List } from './TitleList';
import { Links } from './Links';
import { Search } from './Search';
import { Link } from 'react-router-dom';
import { useEffect, useState, useCallback, useRef } from 'react';

export const Hero = () => {
  const [title, setTitle] = useState('Hungry?');
  const index  = useRef();
  
  const animate = useCallback(() => {
    index.current < List.length - 1 ? ++index.current : index.current = 0;
    setTitle(List[index.current]);
  }, [])

  useEffect(() => {
    const animateID = setInterval(animate, 3000);
    return () => clearInterval(animateID);
    
  }, [animate])

  return (
    <div className={styles.jumbotron}>
      <section className={styles.jbLeft}>
        {/* <section className={styles.jbContainer}> */}
          <div className={styles.jbNav}>
            <img src="/assets/swiggy.svg" alt="swiggy" />
            <div className={styles.navLeft}>
              <button className={`btn fn-large ${styles.jbLogin}`}>Login</button>
              <button className={`btn fn-large invert ${styles.jbRegister}`}>Sign up</button>
            </div>
          </div>
          <div>
            <h1 className={`fn-large ca-title ${styles.jbTitle}`}>{title}</h1>
            <span className={`disabled fn-medium ${styles.jbSubtitle}`}>Order food from favourite restaurants near you.</span>
          </div>
          <Search />
          <section className={styles.jbCaption}>
            <h3 className={styles.captionTitle}>Popular cities in India</h3>
            <ul className={styles.captionList}>
             {
               Links.map(({ name, type}, idx) => (
                <li className={styles.listItem} key={idx}>
                  <Link to="/" className={`fn-large ${type} ${styles.listLink}`}>{name}</Link>
                </li>
               ))
             }
            </ul>
          </section>
        {/* </section> */}
      </section>
      {/* <section className={styles.jbRight}>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq" alt="screenshot" />
      </section> */}
    </div>
  )
}
