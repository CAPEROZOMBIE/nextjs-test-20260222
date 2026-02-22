// Menu03/index.tsx
"use client"

import { useState } from "react"
import { useEffect } from "react";
import styles from "./menu03.module.css"
import Link from "next/link";


function Menu03() {

   const [isOpen, setOpen] = useState<boolean>(false);
   const open = () => setOpen(true);
   const close = () => setOpen(false);

   // スクロールのこと
   //      useEffect(() => {
   //     if (isOpen) {
   //       document.body.style.overflow = "hidden"; // 開いたらスクロール禁止
   //     } else {
   //       document.body.style.overflow = "";       // 閉じたら元に戻す
   //     }
   //   }, [isOpen]);

   // スクロールのこと
   useEffect(() => {
      let scrollY = 0;
      if (isOpen) {
         scrollY = window.scrollY;
         document.body.style.position = "fixed";
         document.body.style.top = `-${scrollY}px`;
         document.body.style.left = "0";
         document.body.style.right = "0";
      } else {
         const top = document.body.style.top;
         document.body.style.position = "";
         document.body.style.top = "";
         document.body.style.left = "";
         document.body.style.right = "";
         window.scrollTo(0, parseInt(top || "0") * -1);
      }
   }, [isOpen]);


   return (
      <div>
         <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
            {/* gptより */}
            {/* <nav className={`${styles.nav} ${isOpen && styles.open}`}></nav> */}

             <div className={styles.overlay} onClick={close}>
               <ul className={styles.items}>
                  <li><Link href="/news">ニュース</Link></li>
                  <li><Link href="/members">メンバー</Link></li>
                  <li><Link href="/contact">問い合わせ</Link></li>
                  <li><Link href="/">トップ</Link></li>
               </ul>
            </div>

            {/* 閉じるボタン */}
            <button className={`${styles.close} ${styles.button}`} onClick={close}>閉じる</button>
         </nav>

         {/* スマホクリックボタン */}
         <button className={styles.button} onClick={open}>
            メニューボタン
         </button>
      </div>
   )
}

export default Menu03