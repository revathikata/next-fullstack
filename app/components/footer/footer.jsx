import styles from './footer.module.css'

function footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>lamaDev</div>
      <div className={styles.text}>creative thoughts agency @ all copy rights</div>
    </div>
  )
}

export default footer