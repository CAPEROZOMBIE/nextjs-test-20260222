// Article/index.tsx 詳細ページのコンポーネント

import Category_comp from "./../Category/index"
import styles from "./../Article/article.module.css";
import { NewsTs } from "@/app/library/microcms"
import Date_comp from "../Date";
import Image from "next/image";
import Link from "next/link";

// import { CategoryTs } from "@/app/library/microcms"


type alltype = { news_detail: NewsTs }
const Article = ({ news_detail }: alltype) => {

   return (
      <main>
         <h1 className={styles.items}>{news_detail.title}</h1>
         <p className={styles.description}>{news_detail.description}</p>
         <div className={styles.meta}>


         {/* カテゴリー */}
         <Link href={`/news/category/${news_detail.category.id}`}>
            <Category_comp category={news_detail.category} />
         </Link>

            <Date_comp kanda={news_detail.publishedAt ?? news_detail.createdAt} />
         </div>
         {news_detail.thumbnail && (
            <Image
               src={news_detail.thumbnail.url}
               alt=""
               width={news_detail.thumbnail.width}
               height={news_detail.thumbnail.height}
               className={styles.thumbnail}
            />
         )}

         <div className={styles.content} dangerouslySetInnerHTML={{ __html: news_detail.content }} />

      </main>
   )

}

export { Article }