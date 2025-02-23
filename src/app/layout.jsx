import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shifat Arman",
  description: "personal website of Shifat Arman",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
