import { Poppins } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              border: "2px solid #B88E2F",
              color: "#B88E2F",
              textAlign: "center",
            },
            className: "my-toast",
          }}
        />
        <NavBar />
        <main className="min-h-[65vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
