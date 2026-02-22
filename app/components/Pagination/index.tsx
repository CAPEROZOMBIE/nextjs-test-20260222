// components/Pagination/index.tsx ページネーションコンポーネント

import Link from "next/link";
import styles from "./pagination.module.css"

type alltype = {
   totalcount:number;
   current?:number

   // 追加2月２１
   basePath?:string;
};

function Pagination({totalcount,current=1,basePath="/news",}:alltype){// 追加2月２１

   const pageZ = Array.from(
      {length:Math.ceil(totalcount / 5)},
      (_,i) => i+1
   )

   return(
      <nav>
         <ul className={styles.container}>
            {pageZ.map((p) => (
               <li key={p} className={styles.list}>

               {current !==p ?(
                  // 追加
                  <Link href={`${basePath}/p/${p}`} className={styles.item}>
                  {p}
                  </Link>
                  ):
                  (
                     <span className={`${styles.item} ${styles.current}`}>{p}</span>
                  )
                  }
               </li>
            ))
            }
         </ul>
      </nav>
   )
}

export { Pagination }