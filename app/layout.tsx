import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "Elevate Stack",
  description:
    "Delve into the world of Elevate Stack Exchange with our comprehensive guide. Uncover the key strategies to maximize your efficiency and impact on this vibrant platform, from crafting insightful questions to providing valuable answers and harnessing advanced features like tagging and search functionalities. Gain access to expert advice, insider tips, and proven best practices to elevate your participation and make a meaningful difference within the Elevate Stack Exchange community. Whether you're a newcomer seeking guidance or a seasoned contributor aiming to enhance your presence, this guide empowers you to navigate Elevate Stack Exchange with confidence and purpose.",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "primary-gradient",
          footerActionLink: "primary-text-gradient hover:text-primary-500",
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
