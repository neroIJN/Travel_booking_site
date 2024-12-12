"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export const LayoutProvider = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/login" && pathname !== "/signup" && <Navbar />}
      {children}
      {pathname !== "/login" && pathname !== "/signup" && <Footer />}
    </>
  );
};

export default LayoutProvider;
