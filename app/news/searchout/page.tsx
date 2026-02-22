// app/news/searchout/page.tsx 検索結果ページ

import style from "./searchout.module.css"
import { getNewsList } from "@/app/library/microcms";  
import NewsList_comp from "@/app/components/NewsList";
import { SearchBox }  from "@/app/components/SearchBox";

type alltype = {searchParams:Promise<{q?:string}>} //Promiseに
async function Page({searchParams}:alltype) {

   // Promiseに追加
   const { q } = await searchParams
   const {contents} = await getNewsList({
      limit:5,
      q
   })
   return(
         <div className={style.container}>
            <span>検索結果～～！</span>
            <br />
            {/* 検索ボックス */}
            <span className={style.ss}><SearchBox /></span>
            <NewsList_comp newsprops={contents}/>
         </div>
   )
}

export default Page