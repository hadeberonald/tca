import React from 'react';
import styles from "./page.module.css";
import Hero from './components/hero/Hero';
import Cta from './components/cta/Cta';
import Services from './components/services/Services';
import Featuredblogs from './components/featuredblogs/Featuredblogs'




const Home = () => {


  return (
    <div className={styles.container}> 
      <Hero/>
      <Cta/>
      <div className={styles.wrapper}>
      <Services/>
      <div className={styles.heading}>
      <h1>Featured Blogs</h1>
      </div>
    </div>
   <Featuredblogs/>
    </div>
  )
}

export default Home;