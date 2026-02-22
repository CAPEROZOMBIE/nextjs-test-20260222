// NewsList/index.tsx

import Image from "next/image"
import type { NewsTs } from "@/app/library/microcms"
import styles from "@/app/components/NewsList/index.module.css"
import Link from "next/link"

type alltype = { newsprops: NewsTs[] }

const NewsList_comp = ({ newsprops }: alltype) => {

   return (
      <>
         {/* ここかな */}
         <ul>
            {newsprops.map((article) => (
               <li key={article.id} className={styles.list}>

                  {/* 0213 */}
                  <Link href={`/news/${article.id}`} className={styles.link}>
                     <div className={styles.link}>
                        <Image
                           className={styles.image}
                           src="/no-image.png"
                           alt=""
                           width={1200}
                           height={630}
                        />
                        <dl className={styles.content}>
                           <dt className={styles.newsItemtitle}>{article.title}</dt>
                           <dd className={styles.meta}>
                              <span className={styles.tag}>{article.category.name}</span>
                              <span className={styles.data}>
                                 <Image
                                    src="/clock.svg"
                                    alt=""
                                    width={16}
                                    height={16}
                                    priority
                                 />
                                 {article.publishedAt}
                              </span>
                           </dd>
                        </dl>
                     </div>
                  </Link>
               </li>
            ))}
         </ul>
      </>
   )
}

export default NewsList_comp