import React from 'react';
import styles from "./blog.module.css";
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';


const Blog = () => {
  return (
    <div className={styles.container}>
        <Sidebar/>
        <Navbar/>

        
        <div className={styles.wrapper}>
        <h1>Hey We Are The Creative Agency, Welcome to our blog! </h1>
            
            <div className={styles.featured}>
            <div className={styles.imgContainer}> 
            <Image src="/pexels-michelangelo-buonarroti-8728556.jpg" alt="" fill className={styles.image}/>
            </div>
            <div className={styles.imagemobile}>
            <Image src="/pexels-michelangelo-buonarroti-8728556.jpg" alt="" width={350} height={250} className={styles.imagem}/>
            </div>
            <div className={styles.text}>
            <h1>The Future of Technology: Predictions and Trends for 2024 and Beyond</h1>
            <p> Stay ahead  of the curve with these technplogy developments that are predicted to transform businesses in 2024 and beyond</p>
            <Link href="/blog/The-Future-of-Technology-Predictions-and-Trends-for-2024-and-Beyond" className={styles.link}>Read More</Link>
            </div>
            </div>

            <div className={styles.subhead}> 
            <h1>Latest Blogs</h1>
            </div>
            <div className={styles.card}>
            <div className={styles.imgContainer}> 
            <Image src="/pexels-cottonbro-studio-5483064.jpg" alt="" fill className={styles.image}/>
            </div>
            <div className={styles.imagemobile}>
            <Image src="/pexels-cottonbro-studio-5483064.jpg" alt="" width={350} height={250} className={styles.imagem}/>
            </div>
            <div className={styles.text}>
            <h1>How to Secure Your Data and Business Assets for 2024</h1>
            <p>With data breaches on the rise, it's crucial for businesses to implement robust cybersecurity measures. This guide outlines key strategies to help secure your data and assets.</p>
            <Link href="/blog/How-to-Secure-Your-Data-and-Business-Assets-for-2024" className={styles.link}>Read More</Link>
            </div>
            </div>

            <div className={styles.card}>
            <div className={styles.imgContainer}> 
            <Image src="/pexels-olia-danilevich-4974920.jpg" alt="" fill className={styles.image}/>
            </div>
            <div className={styles.imagemobile}>
            <Image src="/pexels-olia-danilevich-4974920.jpg" alt="" width={350} height={250} className={styles.imagem}/>
            </div>
            <div className={styles.text}>
            <h1>Why Sales is The Most Important Skill for Every Tech Entrepreneur</h1>
            <p>Running a successful tech startup requires a diverse set of skills. But there is one skill that rises above the rest in importance - the ability to sell. Mastering the art and science of sales is crucial for any tech entrepreneur</p>
            <Link href="/blog/Why-Sales-is-The-Most-Important-Skill-for-Every-Tech-Entrepreneur" className={styles.link}>Read More</Link>
            </div>
            </div>


            <div className={styles.card}>
            <div className={styles.imgContainer}> 
            <Image src="/pexels-pixabay-265667.jpg" alt="" fill className={styles.image}/>
            </div>
            <div className={styles.imagemobile}>
            <Image src="/pexels-pixabay-265667.jpg" alt="" width={350} height={250} className={styles.imagem}/>
            </div>
            <div className={styles.text}>
            <h1>How to Move Your Blog from WordPress.com to Self-Hosted in 3 Easy Steps</h1>
            <p>Moving your WordPress.com blog or website to a self-hosted solution opens up more customzation options and contro. While it can seem daunting, you can make the transition in just 3 main steps.</p>
            <Link href="/blog/How-to-Move-Your-Blog-From-WordPress-to-Self-Hosted-in-3-Easy-Steps" className={styles.link}>Read More</Link>
            </div>
            </div>

            </div>
        </div>
  )
}

export default Blog