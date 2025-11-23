import "./globals.css";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import Background from "@/components/Layout/Background";

export const metadata = {
  title: "beyonCloud Admin",
  description: "Simple admin UI",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Background />
        <div className="min-h-screen">
          {children}
        </div>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
