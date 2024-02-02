import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Furniro Funiture",
  description: "An Ecommerce app for furniro furniture",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} max-w-7xl mx-auto`}>
        <NavBar />
        <main className="">
          {children}
        </main>
      </body>
    </html>
  );
}
