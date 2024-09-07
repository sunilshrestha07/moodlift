import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "../components/Navbar";
import { ReduxProvider } from "../../redux/features/ReduxProvider";
import DailyStepper from "@/components/DailySteps";
import Section from "@/components/Section";

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
<<<<<<< HEAD
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
=======
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <ReduxProvider>
          <Navbar />
          <Section />
          <DailyStepper />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
>>>>>>> ec07f27038b26e56e284438fc2520b1c9e5b6e2a
}
