'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link"
import img1 from "../../public/img1.jpg"
import Button from "./(components)/page";


export default function Home() {

  const handleclick = () => {
    alert("Hello")
  }

  return (
    <>
    <div>
    <h1>Home Page</h1>
    <ul>
      <li><Link href="/" className={styles.Link}>Home</Link></li>
      <li><Link href="/services" className={styles.Link}>Services</Link></li>
      <li><Link href="/products" className={styles.Link}>Products</Link></li>
      <li><Link href="/about/carrers" className={styles.Link}>Carrers Page </Link></li>
      <li><Link href="/contact" className={styles.Link}>Contact us</Link></li>
      <li><Link href="/Image" className={styles.Link}>Image Page</Link></li>
      <li><Link href="/Handling" className={styles.Link}>Event Handling</Link></li>

      <li><Link href="https://nextjs.org/" target="_blank" id={styles.specialLink}>NextJS Site</Link></li>

      <li><Link href="/products/vegis" className={styles.Link}>Vegis Page</Link></li>
    </ul>
    </div>
    
    <h1>Image Component</h1>
    
    <Image src={img1}
    alt="sample img"
    style={{width: "100%", objectFit:"cover"}}
    />

    <Image src={"https://hips.hearstapps.com/hmg-prod/images/spring-flowers-65de4a13478ee.jpg?crop=0.668xw:1.00xh;0.287xw,0&resize=640:*"}
    alt="sample img"
    className="imgcont"
    width={1000}
    height={1000}
    />

<Image src={"https://www.thepetexpress.co.uk/blog-admin/wp-content/uploads/2018/07/Fish-e1531991087808.jpg"}
    alt="sample img"
    className="imgcont"
    width={1000}
    height={1000}
    />
     <h3> Sever Components vs Clint Components</h3>
     <Button/>
    </>
    
  )
}
