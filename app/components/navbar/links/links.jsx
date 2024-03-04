"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '../navbar.module.css'
import { useState } from 'react'

const links = () => {
    const pathName = usePathname()
    const session = true
    const isAdmin = true
    const [open, setOpen] = useState(false)
    const links = [
        {
            tittle: "HomePage",
            path: "/",
        },
        {
            tittle: "About",
            path: "/about",
        },
        {
            tittle: "Contact",
            path: "/contact",
        },
        {
            tittle: "Blog",
            path: "/blog",
        },
    ]
    return (
        <div className={styles.conatiner}>
            <div>
                {links.map((link => (
                    <Link href={link.path} key={link.tittle}
                        className={`$style.conatiner ${pathName === link.path && styles.active}`}>{link.tittle}</Link>
                )))}
                {session ? (<>{isAdmin && <Link href="/admin">Admin</Link>}
                    <button className={styles.logout}>logout</button></>)
                    : (<Link href=""
                    >ss</Link>)}
            </div>
            <button className={styles.mobilemenuBtn} onClick={() =>setOpen((prev) => !prev)}>menu</button>
            {open && (<div className={styles.mobilemenu}>
                {links.map((link) =>(
                    <Link href={link.path} key={link.tittle}>{link.tittle}</Link>
                ))}
            </div>)}
        </div>
    )
}


export default links