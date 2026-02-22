// Category/index.tsx

import { CategoryTs } from "@/app/library/microcms";

// type allpropstype = {kanda:string}
type allpropstype = {category:CategoryTs}

const Category_comp = ({category}:allpropstype) => {

   // }

   // function Category_comp(){
      return(
         <>
         {category.name}
         </>
      )

   }

export default Category_comp;