import styles from './home.module.css'
export default function Home() {
  // throw new Error('Error in home')
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Creative Thoughts Agency.</h1>
        <p>apllication text</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <img src="/brands.png" alt="" className={styles.brandImg} />
        </div>
        <div className={styles.imgContainer}>
          <img src="/hero.gif" alt="" className={styles.heroImg} />
        </div>
      </div>
    </div>
  );
}
