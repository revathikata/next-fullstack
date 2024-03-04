import Image from "next/image";
import styles from "./postcard.module.css";
import Link from "next/link";

function blogPage() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <img src="/about.png" alt="" className={styles.img} />
          <span>01/2/2024</span>
        </div>
        <div className={styles.bottom}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Desc</p>
          <Link href="/blog/post">Read more</Link>
        </div>
      </div>
    </div>
  );
}

export default blogPage;
