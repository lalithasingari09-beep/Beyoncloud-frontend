"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer"; // <-- Added Footer import

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* SIDEBAR */}
      <Sidebar open={open} onClose={() => setOpen(false)} />

      {/* PAGE CONTENT */}
      <div className="flex-1 flex flex-col">

        {/* HEADER */}
        <Header onMenuClick={() => setOpen(true)} />

        {/* MAIN CONTENT */}
        <main className="flex-1 p-4">
          {children}
        </main>

        {/* FOOTER */}
        <Footer /> {/* <-- Footer added here */}
      </div>
    </div>
  );
}
