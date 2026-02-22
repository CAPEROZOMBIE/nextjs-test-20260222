// Header/index.tsx

// type alltype = {Header_props:string}

import Image from "next/image"
import styles from "./index.module.css"
import Link from "next/link"
// import Menu from "../Menu"
// import Menu2 from "../Menu2"
// import Menu04 from "../Menu04"
import Menu03 from "../Menu03"

function HeaderComp () {

   return (
      <>
         <header className={styles.header}>
            <Link href="/" className={styles.logoLink}>
               <Image
                  src="/logo.svg"
                  alt="SIMPLE"
                  className={styles.logo}
                  width={348}
                  height={133}
                  priority
               />
            </Link>
            
            {/* <Menu /> */}
            {/* <Menu2 /> */}
            <Menu03 />
            {/* <Menu04 /> */}
         </header>
      </>
   )
}

export default HeaderComp