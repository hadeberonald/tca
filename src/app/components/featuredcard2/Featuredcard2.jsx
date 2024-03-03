import React from 'react';
import styles from "./featuredcard2.module.css";
import Image from "next/image";
import Link from "next/link";

const Featuredblogs = () => {
  return (
    <div className={styles.container}> 
      <div className={styles.card}>
      <Link href="/blog/Why-Sales-is-The-Most-Important-Skill-for-Every-Tech-Entrepreneur">
        <div className={styles.img}>
      <Image src="/pexels-olia-danilevich-4974920.jpg" alt="" fill/>
      </div>
      <div className={styles.title}>
      <h3>Why Sales is The Most Important Skill for Every Tech Entrepreneur</h3>
      </div>
      </Link>
      </div>
    </div>
    

  )
}

export default Featuredblogs