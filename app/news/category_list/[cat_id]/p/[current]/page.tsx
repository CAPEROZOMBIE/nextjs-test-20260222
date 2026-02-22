// app/news/category_list/[cat_id]/p/[current]/page.tsx カテゴリー　2ページ目以降　ページネーションのページ


import styles from "@/app/news/p/[current]/current.module.css"
import { getNewsList } from "@/app/library/microcms"
import NewsList_comp from "@/app/components/NewsList";
import { notFound } from "next/navigation";
import { Pagination } from "@/app/components/Pagination";

// 追加
import { getCategoryDetail0220 } from "@/app/library/microcms";

//2月２１ 

type alltype = { params: Promise<{
    current: string
    cat_id:string //追加
 }> }

async function Page({ params }: alltype) {
   const { current,cat_id } = await params;
   const pageX = parseInt(current, 5);

   // P189 予期せぬ数値対応
   if (Number.isNaN(pageX) || pageX < 1) {
      notFound();
   }

   // totalCount は後で追加

   // 追加２月２１
   const category = await getCategoryDetail0220(cat_id).catch(notFound);

   const { contents,totalCount } = await getNewsList({      

      // 追加2月２１
      filters:`category[equals]${category.id}`,
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
         <Pagination totalcount={totalCount} current={pageX} 
         basePath={`/news/category_list/${cat_id}`}
         /> 
      </div>
   )
}
export default Page
