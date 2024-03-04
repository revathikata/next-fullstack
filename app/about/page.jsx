import React from "react";
import styles from "./about.module.css";
function aboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2>About Agency</h2>
        <h1>
          we create digital ideas that are bigger, bolder,braver and better
        </h1>
        <p>we create .....</p>
        <div className={styles.boxes}>
        <div className={styles.box}>
          <h1>10 k+</h1>
          <p>year of experiance</p>
        </div>
        <div className={styles.box}>
          <h1>10 k+</h1>
          <p>year of experiance</p>
        </div>
        <div className={styles.box}>
          <h1>10 k+</h1>
          <p>year of experiance</p>
        </div>
      </div>
      </div>
     
      <div className={styles.imgContainer}>
        <img src="/about.png" alt="" width={500} height={500} />
      </div>
    </div>
  );
}

export default aboutPage;
