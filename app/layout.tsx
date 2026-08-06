import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Rico Fedryan | Security & Support Engineer",
  description:
    "Portfolio Muhammad Rico Fedryan, Security Engineer dan Support Engineer dengan pengalaman di privileged access, endpoint security, vulnerability management, dan infrastructure operations.",
  keywords: [
    "Muhammad Rico Fedryan",
    "Security Engineer",
    "Support Engineer",
    "CyberArk",
    "HCL BigFix",
    "Vulnerability Management",
    "Bogor",
  ],
  authors: [{ name: "Muhammad Rico Fedryan" }],
  creator: "Muhammad Rico Fedryan",
  openGraph: {
    title: "Muhammad Rico Fedryan | Security & Support Engineer",
    description:
      "Security engineering, privileged access management, endpoint security, and infrastructure operations.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
