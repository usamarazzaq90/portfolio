import type React from "react";
import type { Metadata } from "next";
import "./globals.css"; // Make sure this path is correct for your project structure
import { CustomThemeProvider } from "@/components/custom-theme-provider"; // Make sure this path is correct

export const metadata: Metadata = {
  title: "Usama Razzaq - Full-Stack Software Engineer",
  description:
    "Professional portfolio of Usama Razzaq, a full-stack software engineer specializing in modern web technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <CustomThemeProvider>{children}</CustomThemeProvider>
      </body>
    </html>
  );
}
