"use client"
import React, { useState } from 'react';
import styles from "./sidebar.module.css";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => { 

    const [open,setOpen] = useState(false)

    return (
    <>
        <div className={styles.container1}>
           <div className={styles.logoContainer}>
           <Image src="/tca-logo-light.png" alt="logo"  width={181} height={56} className={styles.image}/>
    </div>
           <div className={styles.burger} onClick={()=>setOpen(!open)}>
            <Image src="/hamburger.png" alt="" width={38} height={24} />
           </div>
           </div>
           <div className={styles.container2}>
           {open && (
            <div className={styles.responsiveMenu}>
                <div className={styles.close} onClick={()=>setOpen(false)}>
            <div className={styles.close}>

               <Link href="/"></Link>
                
            </div>
           <div className={styles.links}>
           <Link href="/" className={styles.link}>Home</Link>
           <Link href="/blog" className={styles.link}>Blog</Link>
           </div>
           </div>
           </div>
           )}
           </div>
        </>
    );
};

export default Sidebar;