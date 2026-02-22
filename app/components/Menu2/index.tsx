// Menu2/index.tsx

"use client"

import Link from "next/link";
import { useState } from "react";
import styles from "./nav.module.css"
import { useEffect } from "react";

function Menu2() {
   const [navIsOpen, setnavIsOpen] = useState(false);
   const toggleNav = () => {
      setnavIsOpen((prev) => !prev)
   }
   const closeNav = () => {
      setnavIsOpen(false)
   }

   // さて 

   useEffect(() => {
      document.body.classList.toggle("no-scroll", navIsOpen);
   }, [navIsOpen]);

   return (
      <nav className={navIsOpen ? styles.open : styles.close}>

         {/* スクロール防止 */}
         {/* {navIsOpen && (
            <style jsx global>{`
          @media (max-width: 767px) {
            body {
              overflow: hidden;
              position: fixed;
              width: 100%;
            }
          }
        `}</style>
         )} */}

         <button className={styles.btn} onClick={toggleNav}>
            <span className={styles.bar}></span>
            {/* <span className="sr-only">MENU</span> */}
         </button>

         <ul className={styles.list} onClick={closeNav}>
            <li><Link href="/">ホームページ</Link></li>
            <li><Link href="/members">アバウト</Link></li>
            <li><Link href="/members">メッセージ</Link></li>
            <li><Link href="/">トップ</Link></li>
         </ul>
      </nav>
   )
}

export default Menu2