import React from 'react';
import styles from "./hero.module.css";
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';

const Hero = () => {
  return (
    <div className={styles.container}>
      <Navbar/>
      <Sidebar/>
      <div className={styles.text}>
      <h1 className={styles.h1}>It takes 0.05 seconds</h1>
        <h2 className={styles.h2}>to make an impression!</h2>
        <p className={styles.para}>That is all it takes for website visitors to make a decision.</p>
        <p className={styles.para}>
        Captivate your visitors with a sleek website that attracts and converts web traffic to sales. Get in touch with a creative to get a free one-on-one Zoom consultation.</p>   
        </div> 
    </div>
  )
}

export default Hero