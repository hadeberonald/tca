import React from 'react';
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}> 
    <div className={styles.uppercontainer}>
        <div className={styles.quickLinks}>
            <h3 className={styles.heading}>Quick Links</h3>
            <Link href="/">Blog</Link>
            <Link href="/">Schedule Consultation</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/faqs">Frequently Asked Questions</Link>
        </div>
        <div className={styles.socials}>
            <h3 className={styles.heading}>Socials</h3>
            <div className={styles.imageContainer}>
            <Image src="/fb.png" alt="" width={50} height={50}/>
            <Image src="/ig.png" alt="" width={50} height={50}/>
            </div>
        </div>
    </div>
        <div className={styles.copyright}> <p>Copyright © 2024 The Creative Agency </p></div>
        </div>
  )
}

export default Footer