// microcms.ts

// microcms情報

import { createClient } from "microcms-js-sdk";
import type {
   MicroCMSQueries, MicroCMSImage, MicroCMSListContent,
} from "microcms-js-sdk"


// env参照
if (!process.env.MICROCMS_SERVICE_DOMAIN) {
   throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
   throw new Error("MICROCMS_API_KEY is required");
}

const client = createClient({
   serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
   apiKey: process.env.MICROCMS_API_KEY,
})

// メンバーの。。以下

// 型
export type MemberType = {
   name: string;
   position: string;
   profile: string;
   image: MicroCMSImage;
} & MicroCMSListContent

export type CategoryType = {
   name: string;
}

// エンドポイントやgetlist。async awiat

export const getMemberList = async (queries?: MicroCMSQueries) => {
   const listData = await client
      .getList<MemberType>({
         endpoint: "members",
         queries,
      })
   return listData;
}


// ここまで

// type NewsTs = { // おっと
//     id: string;
//     title: string;
//     category: {
//         name: string;
//     };
//     publishedAt: string
//     createdAt: string;
// };


type CategoryNameTs = {
   name: string;
   
}

type DateTs = string;

// export type {NewsTs, CategoryNameTs, DateTs}
export type { CategoryNameTs, DateTs }




// p156 ニュースとカテゴリー 三章で作ったのに追加

type CategoryTs = {
   name: string;
   
   // 試し
   cat_id:string;
} & MicroCMSListContent;

type NewsTs = {
   desriptiontitle: string;
   title: string;
   description: string;
   content: string;
   thumbnail?: MicroCMSImage;
   category: CategoryTs; // おっと
   publishedAt: string
   createdAt: string;

} & MicroCMSListContent

export type { NewsTs, CategoryTs }

export const getNewsList = async (queries?: MicroCMSQueries) => {
   const listData = await client
      .getList<NewsTs>({
         endpoint: "news",
         queries,
      })
   return listData;

}

// カテゴリーページで使う型

const getCategoryDetail0219 = async (
   contentId:string,
   queries?:MicroCMSQueries
) => {
   const detailData = await client.getListDetail<CategoryTs>({
      endpoint:"categories",
      contentId,
      queries,
   });
   return detailData;
};

export {getCategoryDetail0219}



// 詳細ページの型 復習 path

const getNewsDetail = async (
   contentId:string,
   queries?:MicroCMSQueries
) => {
   const detailData = await client.getListDetail<NewsTs>({
      endpoint:"news",
      contentId,
      queries,
      customRequestInit:{
         next:{
            revalidate:queries?.draftKey === undefined ? 60 : 0,
         }
      }
   })
   return detailData
}

export default getNewsDetail



// P184 カテゴリー一覧ページの型？

const getCategoryDetail0220 = async(
   contentId:string,
   queries?:MicroCMSQueries
) => {
   const detailData = await client.getListDetail<CategoryType>({
      endpoint:"categories",
      contentId,
      queries
   })
   return detailData
}

export { getCategoryDetail0220 }











