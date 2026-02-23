// contact/layout.tsx

import Hero from "../components/Hero";

type alltype = { children:React.ReactNode };
const RootLayout = ({ children }: alltype) => {
   return (
      <>
         <Hero title="Contact" subtitle="お問い合わせ"/>
         {children}
      </>
   )
}

export default RootLayout