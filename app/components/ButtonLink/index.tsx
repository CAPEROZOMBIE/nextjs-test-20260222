// ButtonLink/index.tsx

import Link from "next/link"

type alltype = {
   children:React.ReactNode
   hrefdesu:string
}

const ButtonLink = ({children,hrefdesu}:alltype) => {

// }

// function ButtonLink(){

   return(
      <Link href={hrefdesu} className="bt">
         {children}
      </Link>
   )

}

export default ButtonLink

