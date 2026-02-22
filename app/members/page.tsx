// app/members/page.tsx

import style from "./page.module.css"
import Image from "next/image"
import { getMemberList } from "../library/microcms";  // マイクロ

// マイクロ
export async function Page() {
   const data = await getMemberList({limit:3}); // limit
   return(
      //　ここまでマイクロ

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