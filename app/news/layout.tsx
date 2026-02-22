// members/layout.tsx

// import styles from "./page.module.css";
import Hero from "../components/Hero";

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

// function RootLayout ({children}:alltype) => {

// }


// import Sheet from '@/app/components/Sheet';
// import Hero from '@/app/components/Hero';

// type Props = {
//   children: React.ReactNode;
// };

// export default function RootLayout({ children }: Props) {
//   return (
//     <>
//       <Hero title="Members" sub="メンバー" />
//       <Sheet>{children}</Sheet>
//     </>
//   );
// }
