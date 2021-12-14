import styles from './Hero.module.css';
import { useState } from 'react';

export const Search = () => {
  const [location, setLocation] = useState('');
  
  const handleChange = (e) => {
    setLocation(e.target.value);
  }

  return (
    <form action="" className={styles.jbForm}>
      <section className={`${styles.formSearch} ${location ? styles.toggleClear : ''}`}>
        <input 
          type="text"
          list="cities"
          name="cities"
          className={`${styles.formInput}`}
          value={location}
          onChange={(e) => handleChange(e)}
          placeholder="Enter your delivery location"
        />
        <datalist id="cities">
          <option value="Ahmedabad" />
          <option value="Bangalore" />
          <option value="Chennai" />
          <option value="Delhi" />
          <option value="Gurgaon" />
          <option value="Hyderabad" />
          <option value="Kolkata" />
          <option value="Mumbai" />
          <option value="Pune" />
          <option value="& more" />
        </datalist>
        {
          location === "" ?
          <button className={`btn ${styles.formLocate}`}>
            <img src="/assets/crosshairs.svg" alt="crosshair" /> <span>Locate Me</span>
          </button> :
          <span 
            className={`${styles.searchClear}`}
            onClick={() => setLocation('')}
          >Clear</span>
        }
      </section>
      <section className={`${styles.formSearchBtn}`}>
        <button className={`btn ${styles.formBtn}`}>FIND FOOD</button>
      </section>
    </form>
  )
}
