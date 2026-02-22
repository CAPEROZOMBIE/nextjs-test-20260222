// NewsList/index.tsx

import type { NewsTs } from "@/app/library/microcms";
import Image from "next/image";
import styles from "./index.module.css"
import Date_comp from "../Date";
import Category_comp from "../Category";
// import Category_comp from "../Category";

type alltype = { newslist_props:NewsTs[]; }

const NewsList = ({newslist_props}:alltype) => {
       if(newslist_props.length === 0){
        return<p>記事なし</p>
    }
    return (
        <>
            {/* P53 */}
                <ul>
                    {newslist_props.map((article) => (
                        <li key={article.id} className={styles.list}>
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
                                       
                                       {/* カテゴリー */}
                                       
                                       <span>元：{article.category.name}</span>

                                       <Category_comp category={article.category}/>
                              
                                        {/* 日時 */}
                                        <span>
                                            <Image
                                                src="/clock.svg"
                                                alt=""
                                                width={16}
                                                height={16}
                                                priority
                                            />
                                            {article.publishedAt}
                                        </span>

                                        {/* <Date_comp datedao={article.publishedAt} /> */}

                                        <Date_comp kanda={article.publishedAt}/>

                                    </dd>
                                </dl>
                            </div>
                        </li>
                    ))}
                </ul>
        </>
    )
}

export {NewsList}