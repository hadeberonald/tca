import React from 'react';
import styles from "./featuredblogs.module.css";
import Image from "next/image";
import Featuredcard from "../featuredcard/Featuredcard";
import Featuredcard1 from "../featuredcard1/Featuredcard1";
import Featuredcard2 from "../featuredcard2/Featuredcard2";
import Featuredcard3 from "../featuredcard3/Featuredcard3";


const Featuredblogs = async () => {


  return (
    <div className={styles.container}>
       
        
        <Featuredcard />
        <Featuredcard1 />
        <Featuredcard2 />
        <Featuredcard3 />
       
    </div>

  );
};

export default Featuredblogs;