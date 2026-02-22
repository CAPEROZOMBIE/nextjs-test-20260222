// ButtonComp/index.tsx

import Link from "next/link"

type alltype = {
   children:React.ReactNode;
   linkdesu:string;
}

const ButtonComp = ({linkdesu,children}:alltype) => {

   return(
      <Link href={linkdesu} className="bt">
      {children}
      </Link>
   )
}

export default ButtonComp








