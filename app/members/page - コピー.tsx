// app/members/page.tsx

import style from "./page.module.css"
import Image from "next/image"
// import { getMemberList } from "../library/microcms";

// export async function Page() {
//    const data = await getMemberList();
//    return(
      
//    )
// }

// データ
const data = {
   contents:[
      {
         id:"1",
         image:{
            url:"/img-member1.jpg",
            width:240,
            height:240,
         },
         name:"香川真司",
         position:"ceo",
         profile:"説明。。。。。。。。。。。"
      },
      {
         id:"2",
         image:{
            url:"/img-member2.jpg",
            width:240,
            height:240,
         },
         name:"香川真司ssss",
         position:"ceo",
         profile:"説明。。。。。。。。。。。"
      },
      {
         id:"3",
         image:{
            url:"/img-member3.jpg",
            width:240,
            height:240,
         },
         name:"香川真司sss",
         position:"ceo",
         profile:"説明。。。。。。。。。。。"
      },

   ]
}

// 

function Page() {
   return (
      <div className={style.container}>
         {data.contents.length === 0 ? (<p>メンバーゼロ</p>)
         :
         (
            <ul>
               {data.contents.map((member)=>(
                  <li key={member.id} className={style.list}>
                     <Image
                        src={member.image.url}
                        alt=""
                        width={member.image.width}
                        height={member.image.height}
                        className={style.image}
                     />
                     <dl>
                        <dt>{member.name}</dt>
                        <dd>{member.profile}</dd>
                        <dd>{member.position}</dd>
                     </dl>
                  </li>
               ))}

            </ul>
         )
         }
      </div>
   )
}

export default Page