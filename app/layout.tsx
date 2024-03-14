import { Poppins } from "next/font/google";
import "./globals.css";
import ClientComponentLayout from "@/components/ClientComponentLayout";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Furniro Funiture",
  description: "An Ecommerce app for furniro furniture",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} mx-auto min-w-[300px] max-w-7xl`}>
        <ClientComponentLayout>{children}</ClientComponentLayout>
      </body>
    </html>
  );
}
