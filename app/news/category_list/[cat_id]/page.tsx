// app/news/category_list/[cat_id]/page.tsx カテゴリー一覧ページ

import styles from "./cathegory_list.module.css"
import { getCategoryDetail0220, getNewsList } from "./../../../library/microcms" 
import NewsList_comp from "@/app/components/NewsList";
import { notFound } from "next/navigation";
import Category_comp from "@/app/components/Category";
import { Pagination } from "@/app/components/Pagination";

import ButtonComp from "@/app/components/ButtonComp"

type alltype = {params:Promise<{cat_id:string}>}
async function Page({params}:alltype){
   const {cat_id} = await params

   const Orochi = await getCategoryDetail0220(cat_id).catch(notFound); // 追加prochi

   const {contents,totalCount} = await getNewsList ({
      filters:`category[equals]${Orochi.id}` //追加orochi
   })
   return(
      <>
         <div className={styles.container}>
            <div className={styles.midashi}><Category_comp category={Orochi} /> の一覧ですぞ</div>
            <NewsList_comp newsprops={contents} />
            <Pagination 
               totalcount={totalCount} 
               basePath={`/news/category_list/${Orochi.id}`} 
            />

         </div>
         <div className={styles.footer}>
            <ButtonComp hrefdao="/news">ニュース一覧ページへ</ButtonComp>
         </div>
      </>
   )
}

export default Page


// export async function Page() {
//    const Yamata_data = await getNewsList({limit:10}); 
//    return(
//          <div className={style.container}>
//             <NewsList_comp newsprops={Yamata_data.contents} /> 
//          </div>
//    )
// }

// export default Page