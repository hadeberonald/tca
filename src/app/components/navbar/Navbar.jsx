import React from 'react';
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logoContainer}>
           <Image src="/tca-logo-light.png" className={styles.image} alt="logo" width={189} height={59} />
           </div>
           <div className={styles.links}>
           <Link href="/" className={styles.link}>Home</Link>
           <Link href="/blog" className={styles.link}>Blog</Link>
           </div>
    </div>
  )
}

export default Navbar