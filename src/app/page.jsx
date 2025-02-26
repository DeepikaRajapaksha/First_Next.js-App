import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link"

export default function Home() {
  return (
    <>
    <h1>Home Page</h1>
    <ul>
      <li><Link href="/" className={styles.Link}>Home</Link></li>
      <li><Link href="/services" className={styles.Link}>Services</Link></li>
      <li><Link href="/products" className={styles.Link}>Products</Link></li>
      <li><Link href="/about/carrers" className={styles.Link}>Carrers Page </Link></li>
      <li><Link href="/contact" className={styles.Link}>Contact us</Link></li>

      <li><Link href="https://nextjs.org/" target="_blank" id={styles.specialLink}>NextJS Site</Link></li>

      <li><Link href="/products/vegis" className={styles.Link}>Vegis Page</Link></li>
    </ul>
    </>
    
  )
}
