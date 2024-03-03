"use client"

import React, { useState } from 'react';
import styles from "./cta.module.css";
import Image from "next/image";
import Link from "next/link";

const Cta = () => {

const [modal, setModal] = useState(false);

const toggleModal = () => {
  setModal(!modal)
}

  return (
    <>
    <div className={styles.container}>
      <button onClick={toggleModal} className={styles.button}>Book Zoom Consultation</button>
    </div>
    {modal && (
      <div className={styles.modal}>
      <div className={styles.overlay}></div>
      <div className={styles.modalContent}>
      <Link href="/" className={styles.close} onClick={toggleModal}>
      close
      </Link>
        <h2>Book Zoom Consultation</h2>
        <div className={styles.text}>
        <h3 className={styles.subhead}>
          Automatic scheduling system will be available soon
        </h3>
        <p>...But for now, please email us directly on hi@realcre8ive.co.za.</p> 
        <p>Please include the date, time, and a bit of background on your business and we will get back to you quickly!</p>
        <p>NOTE: Consultations are available on weekdays 09:00-17:00 only</p>
        </div>
          </div>
      </div>
    )}
    
    </>
  );
}

export default Cta