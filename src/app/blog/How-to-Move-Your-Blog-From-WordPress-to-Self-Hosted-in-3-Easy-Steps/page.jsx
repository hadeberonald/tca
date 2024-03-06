import React from 'react';
import styles from "./singlePost.module.css";
import Navbar from '@/app/components/navbar/Navbar';
import Sidebar from '@/app/components/sidebar/Sidebar';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return (
    <div className={styles.container}>
        <Navbar/>
        <Sidebar/>
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.headerImageContainer}>
                <Image src="/pexels-pixabay-265667.jpg" alt="" className={styles.image} fill/>
                </div>
                <div className={styles.headerImageContainerm}>
                <Image src="/pexels-pixabay-265667.jpg" alt="" width={350} height={250} className={styles.imagem}/>
                </div>
                <div className={styles.details}>
                <div className={styles.title}>
                    <h1>How to Move Your Blog from WordPress.com to Self-Hosted In 3 Easy Steps</h1>
                </div>
                
                <div className={styles.detail}>
                    <div className={styles.userImageContainer}>
                        <Image src="/avatar.jpg" alt="" className={styles.avatar} width={50} height={50} />
                    </div>
                    <div className={styles.text}>
                    <div className={styles.username}> <p>Ronald Hadebe</p></div>
                    <div className={styles.date}><p>03/03/2024</p></div>
                </div>
                </div>
                </div>
            </div>

            <div className={styles.postContent}>
           <p> Moving your WordPress.com blog to self-hosted WordPress opens up more customization options and control. While it can seem daunting, you can make the transition in just 3 main steps.</p>

                <h2 className={styles.h2}>Step 1: Back Up Your WordPress.com Blog</h2>

                <p>To seamlessly transition your WordPress.com site, there are a few key steps to take. First, utilize the built-in WordPress.com exporter to download your existing content - this ensures all your posts and pages will remain intact. Don't forget to manually back up your media library as well, as any images or files will need to be migrated over. Finally, document any customizations, plugins, or theme adjustments made to your current site so they can be replicated. Following this straightforward process will allow you to migrate your WordPress.com site smoothly and efficiently. </p>

                <h2 className={styles.h2}>Step 2: Set Up Your Self-Hosted WordPress Site</h2>

                <p>Secure a domain name that reflects your brand and select web hosting that provides the storage space and capabilities your site requires. With hosting in place, install WordPress to create the foundation for your site. Then, customize the look and functionality by activating the theme and essential plugins you utilized before. Configuring your self-hosted WordPress site takes time upfront, but provides you with complete creative control and ownership of your platform. The investment will pay dividends as your site becomes a hub for engaging your audience. </p>

                <h2 className={styles.h2}>Step 3: Import Your WordPress.com Content</h2>

                <p>Migrating your content from WordPress.com to self-hosted WordPress is straightforward with the WordPress importer. This handy plugin allows you to seamlessly bring your posts, pages, comments, custom fields, categories and tags into your new site. Simply install it, connect to your WordPress.com site, and watch your content flow into your self-hosted site install.</p>

                <p>Don't forget to upload your media library as well. You'll want all those great images, videos and documents you've collected over the years. Re-upload them to your self-hosted media library so your content looks its best.</p>

                <p>With a few clicks, your WordPress.com site can have a new home on self-hosted WordPress. Double check everything imported correctly, and you'll be ready to fully take advantage of everything WordPress has to offer.</p>

                <p>Moving from WordPress.com to self-hosted WordPress is straightforward when you take it step-by-step. With your content backed up and imported, you'll be able to fully customize your blog on your own domain.</p>
                <p>Ready to make the move and unlock the full potential of your WordPress blog? Get started today!</p>

            </div>
            <h3 className={styles.subheading}>read more...</h3>
            <div className={styles.links}>
            <Link href="/blog/The-Future-of-Technology-Predictions-and-Trends-for-2024-and-Beyond">
            The Future of Technology: Predictions and Trends for 2024 and Beyond
            </Link>
            <Link href="/blog/How-to-Secure-Your-Data-and-Business-Assets-for-2024">
            How to Secure Your Data and Business Assets for 2024
            </Link>
            <Link href="/blog/Why-Sales-is-The-Most-Important-Skill-for-Every-Tech-Entrepreneur">
            Why Sales is The Most Important Skill for Every Tech Entrepreneur
            </Link>
            </div>
            <div className={styles.link}>
            <Link href="/blog">Back</Link>
            </div>
        </div>
    </div>
  )
}

export default page