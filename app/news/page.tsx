// app/news/page.tsx ニュース一覧ページ

import style from "./news.module.css"
import { getNewsList } from "../library/microcms";  
import NewsList_comp from "../components/NewsList";
import { Pagination } from "../components/Pagination";
import { SearchBox }  from "@/app/components/SearchBox";

export const revalidate = 60 //　追加

export async function Page() {
   const Yamata_data = await getNewsList({limit:5}); 
   return(
         <div className={style.container}>

            {/* 検索ボックス */}
            <SearchBox />

            <NewsList_comp newsprops={Yamata_data.contents} />
            <Pagination totalcount={Yamata_data.totalCount} />
         </div>
   )
}

export default Page