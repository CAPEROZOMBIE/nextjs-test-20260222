// Category/index.tsx //カテゴリー名表示の

import type { CategoryNameTs } from "@/app/library/microcms"
import styles from "./index.module.css"

type alltype = {category:CategoryNameTs}

const Category_comp = ({category}:alltype) => {
   
   return(
      <>
         <span className={styles.tag}>{category.name}</span>
      </>
   )
}

export default Category_comp