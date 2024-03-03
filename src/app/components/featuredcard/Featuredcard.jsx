import React from 'react';
import styles from "./featuredcard.module.css";
import Image from "next/image";
import Link from "next/link";

const Featuredblogs = () => {
  return (
    <div className={styles.container}> 
      <div className={styles.card}>
      <Link href="/blog/The-Future-of-Technology-Predictions-and-Trends-for-2024-and-Beyond">
        <div className={styles.img}>
      <Image src="/pexels-michelangelo-buonarroti-8728556.jpg" alt="" fill/>
      </div>
      <div className={styles.title}>
      <h3>The Future of Technology: Predictions and Trends for 2024 and Beyond</h3>
      </div>
      </Link>
      </div>
    </div>
    

  )
}

export default Featuredblogs