import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AiBot from "@/components/AiBot";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const spaceGrotest = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Soft Sell",
  description:
    "SoftSell is a trusted platform that helps organizations recover value from idle software assets by securely selling unused licenses. We streamline the process with quick valuations, secure transfers, and dedicated support, making license liquidation simple and effective.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotest.className}  antialiased bg-black text-white max-w-[100rem] min-h-screen mx-auto px-2 lg:px-28 relative`}
      >
        <Navbar />
        {children}
        <Footer />
        <AiBot className={"fixed right-7 lg:right-10 bottom-7 lg:bottom-10"} />
      </body>
    </html>
  );
}
