import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Olympus – The HR Icon | µLearn",
  description:
    "Olympus – The HR Icon is a hybrid HR and leadership challenge bridging academic learning with real-world corporate decision-making. Organized by µLearn HR Interest Group.",
  keywords: [
    "HR Icon",
    "Olympus",
    "µLearn",
    "Leadership",
    "HR Challenge",
    "Management",
    "Students",
  ],
  authors: [{ name: "µLearn HR Interest Group" }],
  openGraph: {
    title: "Olympus – The HR Icon",
    description:
      "Bridge academic learning with real-world corporate decision-making",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-sans`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
