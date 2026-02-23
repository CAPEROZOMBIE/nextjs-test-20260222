// layout.tsx

import "./globals.css";
// import "./components.css";
import "./menu02.css";
import HeaderComp from "./components/Header";
import FooterComp from "./components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
   metadataBase: new URL("http://localhost:3000"),
   title: { template: "%s | シンプルなサイトだお", default: "シンプルなサイトです。", },
   description: "説明",
   openGraph: { title: "シンプルなんちゃら", description: "なんちゃら", images: ["/ogp.png"] },
   alternates: { canonical: "http://localhost:3000" }
};

function RootLayout({ children, }: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="ja">
         <body>
            <HeaderComp />
            {children}
            <FooterComp />
         </body>
      </html>
   );
}

export default RootLayout