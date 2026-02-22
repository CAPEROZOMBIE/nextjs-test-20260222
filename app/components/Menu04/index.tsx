// Menu04/index.tsx

"use client"

import styles from "./menu04.module.css"
import { useState } from "react"
import Link from "next/link";

function Menu04 () {

   const [navIsOpen,setnavIsOpen] = useState(false);

   const toggleNav = () => {
      setnavIsOpen((prev) => !prev)
   }

   const closeNav = () => {
      setnavIsOpen(false)
   }
   
   return(
      <div> 
         {/* <nav className={styles.nav} > */}

         {/* スクロール防止 */}
         {navIsOpen &&(
            <style jsx global>{`
               @media  (max-width: 767px){
                  body {
                  overflow:hidden;
                  position:fixed;
                  width:100%
                  }
               }
            `}
            </style>
         )};

         <nav className={`${styles.nav} ${navIsOpen ? styles.open : styles.close}`} >

            <button className={styles.button} onClick={toggleNav}>あああああ</button>

            <ul className={styles.list} onClick={closeNav}>
               <li><Link href="/members">メンバーズ</Link></li>
               <li><Link href="/">ホーム</Link></li>
               <li><Link href="/aa">ヤマタ</Link></li>
            </ul>
            
         </nav>

         
      </div>
   )
}

export default Menu04