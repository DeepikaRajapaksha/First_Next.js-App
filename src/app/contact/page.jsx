import React from 'react'
import Link from 'next/link'
import styles from './contact.module.css'
function page() {
  return (
    <>
    <h1>Contact us page</h1>
    <Link href="/"  className={styles.Link}>Home</Link>
    
    </>
    
  )
}

export default page