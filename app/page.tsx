// page.tsx

import styles from "./page.module.css"
import Image from "next/image"
// import  ButtonLink  from "./components/ButtonLink";
// import type { NewsTs } from "./library/microcms";

import NewsList_comp from "./components/NewsList";
import ButtonComp from "./components/ButtonComp";

// 5章追加
import { getNewsList } from "./library/microcms";

// const data: {contents: NewsTs[]} = {
//     contents: [
//         {
//             id: "1",
//             title: "渋谷ーーー",
//             category: {
//                 name: "更新",
//             },
//             publishedAt: "2026/02/22",
//             createdAt: "2026/02/25",
//         },
//         {
//             id: '2',
//             title: '当社CEOが業界リーダーTOP30に選出されました',
//             category: {
//                 name: '更新情報',
//             },
//             publishedAt: '2023/05/19',
//             createdAt: '2023/05/19',
//         },
//         {
//             id: '3',
//             title: 'テストの記事です',
//             category: {
//                 name: '更新情報',
//             },
//             publishedAt: '2023/04/19',
//             createdAt: '2023/04/19',
//         },
//     ]
// }

export default async function Home() {
   //  const sliceData = data.contents.slice(0,3);

   const yamata_data = await getNewsList({limit:5})

    return (
        <>
            <section className={styles.stop}>
          <h1 className={styles.title}>トップページ</h1>
          <p className={styles.description}>
            私たちは市場をリードしているグローバルテックカンパニーです。
          </p>
                <Image
                    className={styles.bgimg}
                    src="/img-mv.jpg"
                    alt=""
                    width={4000}
                    height={1200} />
            </section>

            {/* P53 */}
            <section className={styles.news}>
                <h2 className={styles.newsTitle}>Newsです。</h2>

               {/* ここかなNewsList */}
               {/* <NewsList_comp newsprops={sliceData}/> */}
               <NewsList_comp newsprops={yamata_data.contents}/>

               {/* ボタン */}
               <ButtonComp hrefdao="/about">ボタン</ButtonComp>

                {/* <div className={styles.newsLink}>
                    <ButtonLink hrefdesu="/news">もっと見る</ButtonLink>
                </div> */}
            </section>
        </>
    )
}