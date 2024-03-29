"use client";
import { useState } from "react";
import ShoppingCart from "./ShoppingCart";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ShoppingCartBtn from "./ShoppingCartBtn";

export default function ClientComponentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  return (
    <>
      {/* <ShoppingCart
        isCartModalOpen={isCartModalOpen}
        closeCartModalOpen={() => setIsCartModalOpen(!isCartModalOpen)}
      />
      <NavBar openCartModal={() => setIsCartModalOpen(true)} />
      <main className="min-h-[65vh]">{children}</main>
      <Footer /> */}
    </>
  );
}
