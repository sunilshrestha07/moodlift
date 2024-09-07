import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "../components/Navbar";
import { ReduxProvider } from "../../redux/features/ReduxProvider";

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
            <body className={`${poppins.className} relative`}>
                <ReduxProvider>
                    <Navbar />
                    {children}
                </ReduxProvider>
            </body>
        </html>
    );
}
