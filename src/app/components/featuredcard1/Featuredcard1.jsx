import React from 'react';
import styles from "./featuredcard1.module.css";
import Image from "next/image";
import Link from "next/link";

const Featuredblogs = () => {
  return (
    <div className={styles.container}> 
      <div className={styles.card}>
      <Link href="/blog/How-to-Secure-Your-Data-and-Business-Assets-for-2024">
        <div className={styles.img}>
      <Image src="/pexels-cottonbro-studio-5483064.jpg" alt="" fill/>
      </div>
      <div className={styles.title}>
      <h3>How to Secure Your Data and Business Assets for 2024</h3>
      </div>
      </Link>
      </div>
    </div>
    

  )
}

export default Featuredblogs