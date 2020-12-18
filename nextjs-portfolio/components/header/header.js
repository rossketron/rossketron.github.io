import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './header.module.css'

const isActive = (href) => {
  const router = useRouter()
  return (router.pathname === href)
}

const Header = () => {
  return (
    <header className={styles.container}>
      <p className={styles.title}>Portfo<span>lio.</span></p>
      <ul className={styles.page_links}>
        <li className={ isActive('/') ? styles.active : '' }>
          <Link href="/"><a>Home</a></Link>
        </li>
        <li className={ isActive('/aboutme') ? styles.active : '' }>
          <Link href="/aboutme"><a>About</a></Link>
        </li>
        <li className={ isActive('/projects') ? styles.active : '' }>
          <Link href="/projects"><a>Projects</a></Link>
        </li>
        <li className={ isActive('/contactme') ? styles.active : '' }>
          <Link href="/contactme"><a>Contact</a></Link>
        </li>
      </ul>
    </header>
  )
}

export default Header