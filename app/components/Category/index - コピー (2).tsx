// Category/index.tsx

import type { CategoryTs } from "@/app/library/microcms";
import styles from "./index.module.css"

type Orochi = {
    yamata_category:CategoryTs;
}

function Category({yamata_category}:Orochi) {
    return (
        <>
        <span className={styles.tag}>カテ：{yamata_category.name}</span>
        </>
    )
}

export {Category}