// footer/index.tsx

import Link from "next/link"
import styles from "./index.module.css"

function FooterComp() {
   return (

      <footer>
         <nav className={styles.nav}>
            <ul className={styles.items}>
               <li className={styles.item}>
                  <a href="/news">ニュース</a>
               </li>
               <li className={styles.item}>
                  <a href="/members">メンバー</a>
               </li>
               <li className={styles.item}>
                  <a href="/contact">お問い合わせ</a>
               </li>
               <li className={styles.item}>
                  <Link href="/">トップへ</Link>
               </li>
            </ul>
         </nav>
         <p className={styles.cr}>© SIMPLE. All Rights Reserved 2024</p>
         
      </footer>
   )
}

export default FooterComp