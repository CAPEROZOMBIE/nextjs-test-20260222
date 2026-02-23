// app/news/[path]/page.tsx　ニュース・詳細ページ2　[path] 

import getNewsDetail from "@/app/library/microcms" 
import styles from "./detailPath.module.css"
import Date_comp from "@/app/components/Date"
import Category_comp from "@/app/components/Category"
import Image from "next/image"
import ButtonComp from "@/app/components/ButtonComp"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Metadata } from "next"

// export const revalidate = 60 //　追加

type alltype = { 
   params: Promise<{ path: string; }>
   searchParams:Promise<{dk?:string;}> // 追加
}

// meta情報
// export async function generateMetadata({
//     params, searchParams }:alltype):Promise<Metadata>{
//       const data = await getNewsDetail(params.slug,{
//          draftKey:searchParams.dk,
//       });

//       return{
//          title:data.title,
//          description:data.description,
//          openGraph:{
//             title:data.title,
//             description:data.description,
//             images:[data?.thumbnail?.url ?? ""],
//          }
//       }
//     }


// Meta情報改訂GPT
export async function generateMetadata(
  { params, searchParams }: alltype
): Promise<Metadata> {

  const { path } = await params
  const { dk } = await searchParams

  const data = await getNewsDetail(path, {
    draftKey: dk,
  })

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data?.thumbnail?.url ?? ""],
    },
  }
}


async function Page({ params,searchParams }: alltype) {
   const { path } = await params
   const { dk } = await searchParams
   const YamataData = await getNewsDetail(path,{draftKey:dk}).catch(notFound)　// 追加
   return (
      <>
      <main>
         <div className={styles.container}>
         <h1>{YamataData.title}</h1>
         <p>{YamataData.description}</p>
         <div>

            {/* カテゴリーへのリンク */}
            <Link href={`/news/category_list/${YamataData.category.id}`} className={styles.categoryLink}>
               <Category_comp category={YamataData.category} /> 
            </Link>

            <Date_comp kanda={YamataData.publishedAt} />
         </div>
         {YamataData.thumbnail && (
            <Image
               src={YamataData.thumbnail.url}
               alt=""
               className={styles.thumbnail}
               width={YamataData.thumbnail.width}
               height={YamataData.thumbnail.height}
            />
         )}

         <div className={styles.content}
            dangerouslySetInnerHTML={{__html:YamataData.content}}
          />
         </div>
      </main>
      <div className={styles.footer}>
         <ButtonComp hrefdao="/news">ニュース一覧ページへ</ButtonComp>
      </div>
      </>
   )
}

export default Page



// type alltype = { params : {path:string } }

// export default async function Page (params:alltype){
//    return <div>{JSON.stringify(params)}</div>
// }
