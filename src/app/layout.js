import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/context/ThemeContext";

export const metadata = {
  title: "Text project",
  description: "This is a text project for navbar",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`h-[2000px] ${inter.className}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
