import Link from 'next/link'
import Links from './links/links'
import styles from './navbar.module.css'
const navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div>
        {/* <Link href="/">Home</Link>
        <Link href="/about">about</Link>
        <Link href="/contact">Contact</Link> */}
        <Links />
      </div>
    </div>
  )
}

export default navbar