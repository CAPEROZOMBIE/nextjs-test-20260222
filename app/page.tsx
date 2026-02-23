// app/page.tsx トップページ

import styles from "./page.module.css"
import Image from "next/image"
import NewsList_comp from "./components/NewsList";
import ButtonComp from "./components/ButtonComp";
import { getNewsList } from "./library/microcms";

export const revalidate = 60 // 追加　0222

export default async function Home() {
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
                    height={1200}
                    priority
                    sizes="(max-width:640px) 100vw 50vw"
                     />
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