import Footer from "@/components/frontend/Footer";
import Navbar from "@/components/frontend/Navbar";
import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="max-w-8xl mx-auto">{children}</div>
      <Footer />
    </div>
  );
}
