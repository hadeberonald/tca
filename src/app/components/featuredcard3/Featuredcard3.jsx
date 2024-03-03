import React from 'react';
import styles from "./featuredcard3.module.css";
import Image from "next/image";
import Link from "next/link";

const Featuredblogs = () => {
  return (
    <div className={styles.container}> 
      <div className={styles.card}>
      <Link href="/blog/How-to-Move-Your-Blog-From-WordPress-to-Self-Hosted-in-3-Easy-Steps">
        <div className={styles.img}>
      <Image src="/pexels-pixabay-265667.jpg" alt="" fill/>
      </div>
      <div className={styles.title}>
      <h3>How to Move Your Blog from WordPress.com to Self-Hosted in 3 Easy Steps</h3>
      </div>
      </Link>
      </div>
    </div>
    

  )
}

export default Featuredblogs