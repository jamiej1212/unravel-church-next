import type { Metadata } from "next";
import "./globals.css";

import Header from './components/header';
import Footer from "./components/footer";
import FontAwesomeConfig from "./components/fontawesome";

import localFont from "next/font/local";

const Pretendard = localFont({
  src: [{ path: '../../public/fonts/PretendardVariable.ttf'}],
  variable: "--font-pretendard"
});

export const metadata: Metadata = {
  title: "Unravel Church"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <FontAwesomeConfig />
      </head>
      <body className={Pretendard.variable}>
      <div className="container">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}