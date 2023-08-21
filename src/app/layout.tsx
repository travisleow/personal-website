import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Travis Leow | Portfolio",
    description:
        "Travis Leow Portfolio, created with Next.js. Travis is a full-stack developer with a passion for creating beautiful, functional, and accessible websites. Currently studying full-time at Singapore Polytechnic, pursuing a Diploma in Information Technology.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 `}>
                <div className="bg-[#E6DADA] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
                <div className="bg-[#E9E4F0] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

                {children}
            </body>
        </html>
    );
}
