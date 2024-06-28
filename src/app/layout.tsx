import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soul Brokers",
  description: " | Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang='pt-br'>
			<body className='flex flex-col min-h-screen w-full    '>
				<Navbar2 />
				<div className=' container flex flex-col gap-y-20 mx-auto items-center   w-full '>
					{children}
				</div>
			</body>
		</html>
  )
}
