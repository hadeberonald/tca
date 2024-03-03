import React from 'react';
import styles from "./services.module.css";
import Image from "next/image";

const Services = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
      <h1>👇What We Do👇</h1>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.card1}>
          <div className={styles.imgContainer1}>
            <Image src="/responsive-web-dev.gif" alt=""  width={220} height={160}/>
          </div>
            <h3>Website & Online Store Development</h3>
            <div className={styles.list}>
              <ul>
                <li>Multi-Page Website with in-built blogging functionality</li>
                <li>Online shop with custom admin dashboard for content management and order monitoring</li>
                <li>Software documentation and 24/7 technical support</li>
              </ul>
        </div>
      </div>
      <div className={styles.card2}>
        <div className={styles.imgContainer}>
            <Image src="/SEO-Content-Writing.gif" alt=""  width={100} height={130}/>
            </div>
            <h3 className={styles.cmh}>Content Marketing</h3>
            <div className={styles.list}>
                <ul>
                    <li>Search Engine Optimization incl. KWR, Keyword Placement, Internal Linkbuilding </li>
                    <li>Copywriting for blogs, PPC Ads, social media content, and email marketing</li>
                    <li>Template design for PPC Ads, social media content, and email newsletters</li>
                </ul>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Services