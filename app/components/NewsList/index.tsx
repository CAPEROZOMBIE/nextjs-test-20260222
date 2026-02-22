// NewsList/index.tsx　ニュース一覧コンポーネント

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
                  {/* <Link href={`/news/${article.id}`} className={styles.link}> </Link> */}
                     <div className={styles.link}>

                        {/* 追加５章 */}

                        {article.thumbnail ? (
                           <Image src={article.thumbnail.url}
                              alt=""
                              className={styles.image}
                              width={article.thumbnail.width}
                              height={article.thumbnail.height}
                           />
                        ) : (
                           <Image
                              className={styles.image}
                              src="/no-image.png"
                              alt=""
                              width={1200}
                          
                          
                              height={630}
                           />
                        )}

                        <dl className={styles.content}>
                            <Link href={`/news/${article.id}`} className={styles.link}> <dt className={styles.newsItemtitle}>{article.title}</dt></Link>
                           <dd className={styles.meta}>

                              {/* カテゴリーへのリンク */}
                              {/* <Link href={`/news/category_list/${article.category.id}`}> */}
                                 <span className={styles.tag}>【{article.category.name}】</span>
                              {/* </Link> */}

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
               </li>
            ))}
         </ul>
      </>
   )
}

export default NewsList_comp