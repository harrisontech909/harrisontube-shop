import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HarrisonTube Shop",
  description: "Welcome to HarrisonTube Shop, your one-stop destination for all things HarrisonTube! Explore our exclusive merchandise, including t-shirts, hoodies, mugs, and more. Show off your love for HarrisonTube with our high-quality products designed for fans like you. Shop now and join the HarrisonTube community in style!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
