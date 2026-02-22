// Date/index.tsx

import Image from "next/image"
type alltype = { kanda: string }

const Date_comp = ({ kanda }: alltype) => {

   return (
      <>
         <Image
            src="/clock.svg"
            alt=""
            width={16}
            height={16}
            priority
         />
         <span className="datetest">{kanda}</span>
         
      </>
   )
}

export default Date_comp