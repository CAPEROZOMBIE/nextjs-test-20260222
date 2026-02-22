// app/news/p/[current]/page.tsx 2ページ目以降　ページネーションのページ


import styles from "@/app/news/p/[current]/current.module.css"
import { getNewsList } from "./../../../library/microcms"
import NewsList_comp from "@/app/components/NewsList";
import { notFound } from "next/navigation";
import { Pagination } from "@/app/components/Pagination";


type alltype = { params: Promise<{ current: string }> }

async function Page({ params }: alltype) {
   const { current } = await params;
   const pageX = parseInt(current, 10);

   // P189 予期せぬ数値対応
   if (Number.isNaN(pageX) || pageX < 1) {
      notFound();
   }

   // totalCount は後で追加
   const { contents,totalCount } = await getNewsList({   
      limit: 5,
      offset: 5 * (pageX - 1),
   })

   // P189 予期せぬ対応
   if (contents.length === 0) {
      notFound();
   }

   return (
      <div className={styles.container}>
         <NewsList_comp newsprops={contents} />
         <Pagination totalcount={totalCount} current={pageX}/> 
      </div>
   )
}
export default Page