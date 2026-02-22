// Hero/index.tsx

import Image from "next/image"
import styles from "./index.module.css"

type alltype = {
   title: string;
   subtitle: string;
   // children: React.ReactNode;
}

const Hero = ({ title, subtitle }: alltype) => {

   return (
      <section className={styles.container} >
         <div>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.sub}>{subtitle}</p>
         </div>
         <Image
            className={styles.bgimg}
            src="/img-mv.jpg"
            alt=""
            width={4000}
            height={1200}
         />
      </section>
   )
}

export default Hero