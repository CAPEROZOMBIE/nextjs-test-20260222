// layout.tsx

import "./globals.css";
// import "./components.css";
import "./menu02.css";
import HeaderComp from "./components/Header";
import FooterComp from "./components/Footer";

function RootLayout({children,}: Readonly<{
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