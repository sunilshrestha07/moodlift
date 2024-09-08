import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "../components/Navbar";
import ReduxProvider from "../../redux/features/ReduxProvider";
import blurBlob from "@/public/blobs/blueBlob.svg";
import Image from "next/image";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Moodlift",
    description: "Mental health tracking app Enhanced by AI and ",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.className}`}>
                <ReduxProvider>
                    <Navbar />
                    <div className="absolute">
                        <Image src={blurBlob} alt="blob" />
                    </div>
                    {children}
                </ReduxProvider>
            </body>
        </html>
    );
}
