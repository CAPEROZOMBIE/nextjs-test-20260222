// ButtonComp/index.tsx

import Link from "next/link"

type alltype = {
   hrefdao:string
   children:React.ReactNode;
}

const ButtonComp = ({hrefdao,children}:alltype) => {

   return(
      <Link href={hrefdao} className="bt">
         {children}
      </Link>
   )
}

export default ButtonComp