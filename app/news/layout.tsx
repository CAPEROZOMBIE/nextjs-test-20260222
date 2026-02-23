// news/layout.tsx ニュース

import Hero from "../components/Hero";

export const revalidate = 60 // 追加　0222

// meta設定
export const metadata = {
   title: "プロレスニュース"
}

type alltype = { children:React.ReactNode };

const RootLayout = ({ children }: alltype) => {
   return (
      <>
         <Hero title="ニュースページです。" subtitle="News"/>
         {children}
      </>
   )
}

export default RootLayout