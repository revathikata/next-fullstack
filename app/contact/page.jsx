import styles from "./contact.module.css";

function contactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src="/contact.png" alt="" className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name " />
          <input type="email" placeholder="email Address " />
          <input type="text" placeholder="phoneNumber (optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

export default contactPage;
