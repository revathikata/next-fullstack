import React from 'react'
import styles from './about.module.css'
function aboutPage() {
  return (
    <div className={styles.imgContainer}>
        <img src="/about.png" alt="" width={500} height={500}/>
    </div>
  )
}

export default aboutPage