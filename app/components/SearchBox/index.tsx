// component/SearchBox/index.tsx

"use client"

import Image from "next/image";
import styles from "./index.module.css"
import { useRouter, useSearchParams } from "next/navigation";

import { Suspense } from "react";


function SearchFieldComponent () {
// function SearchBox() {
   const router = useRouter();
   const searchParams = useSearchParams();

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const q = e.currentTarget.elements.namedItem('q');
      if (q instanceof HTMLInputElement) {
         const params = new URLSearchParams();
         params.set('q', q.value.trim());
         router.push(`/news/searchout?${params.toString()}`);
      }
   }

   return (
      <>
         <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.search} >
               <Image
                  src="/search.svg"
                  alt="検索ボックス"
                  width={16}
                  height={16}
                  loading="eager"
               />
               <input
                  type="text"
                  name="q"
                  defaultValue={searchParams.get("q") ?? undefined}
                  placeholder=""
                  className={styles.searchInput}
               />
            </label>

         </form>
      </>
   )
}

//  SearchFieldComponent ()　このページでsuspenseして、SearchBoxでexport

function SearchBox(){
   return(
      <Suspense>
         <SearchFieldComponent />
      </Suspense>
   )
}
export { SearchBox }