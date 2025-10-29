import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Movie Connections",
  description: "A site for looking at the connections between movies",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        {/* <link rel='stylesheet' href="/styles.css" /> */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}  bg-black`}>
        {children}
      </body>
    </html>
  );
}
