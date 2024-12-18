import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import Header from './components/header';
import Footer from "./components/footer";
import FontAwesomeConfig from "./components/fontawesome";

import localFont from 'next/font/local';

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "900"],
});

const Pretendard = localFont({
    src: '../../public/fonts/PretendardVariable.ttf',
    variable: "--font-pretendard"
});

export const metadata: Metadata = {
  title: "Unravel Church",
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
      <body>
      <div className="container">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}