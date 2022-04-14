import Image from "next/image"
import Link from "next/link"
import styles from "./SiteNav.module.css"
import { useState } from "react"

function SiteNav() {
    const [open,setOpen] = useState(false);
    const [active,setActive] = useState(false);
  return (
    <header className={styles.navbar}>
        <nav className={styles.container}>
            <Link href="/">
               <a className={styles.logo_container}>
                    <img className={styles.logo} src="/img/lucent_logo.svg" alt="lucent"/>
                </a>                
            </Link>
            <ul className={styles.navbar_menu}>
                <Link href="/">
                    <li className={styles.links_line}><a className={styles.navbar_links}>HOME</a></li>
                </Link>
                <Link href="#">
                    <li className={styles.links_line}><a className={styles.navbar_links}>TEAMS</a></li>
                </Link>
                <Link href="#">
                    <li className={styles.links_line}><a className={styles.navbar_links}>NEWS</a></li>
                </Link>
                <Link href="/about">
                    <li className={styles.links_line}><a className={styles.navbar_links}>ABOUT</a></li>
                </Link>
                <Link href="#">
                    <li className={styles.links_line}><a className={styles.navbar_links}>CONTACT</a></li>
                </Link>              
            </ul>
            <button className={styles.hamburger_container} onClick={() => setOpen(!open)}>      
                <div className={open ? styles.hamburger_open : styles.hamburger}></div>
            </button>       
           
        </nav>
        
    </header>
   
  )
}

export default SiteNav