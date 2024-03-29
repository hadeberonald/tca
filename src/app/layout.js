import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Creative Agency",
  description: "The best digital agency in South Africa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <Footer/>
      </body>
    </html>
  );
}
