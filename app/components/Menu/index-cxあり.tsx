// Menu/index.tsx

"use client";

import { useState } from "react";
// import cx from "classnames";

import styles from "./index.module.css"
import Link from "next/link"
import Image from "next/image"

function Menu() {

   const [isOpen, setOpen] = useState<boolean>(false);
   const open = () => setOpen(true);
   const close = () => setOpen(false); 

   return (
      <div>
         {/* <nav className={cx(styles.nav, isOpen && styles.open)}> */}
         <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>

            <ul className={styles.items}>
               <li>
                  <Link href="/news">ニュース</Link>
               </li>
               <li>
                  <Link href="/members">メンバー</Link>
               </li>
               <li>
                  <Link href="/contact">問い合わせ</Link>
               </li>
            </ul>

            {/* 閉じる */}
            {/* <div className={cx(styles.button, styles.close)} onClick={close}> */}
            
            <div className={`${styles.button} ${styles.close}`} onClick={close} >
               閉じる
            </div>
         </nav>

         <button className={styles.button} onClick={open}>
            <Image src="/menu.svg" alt="" width={24} height={24} />
         </button>
      </div>
   )
}

export default Menu