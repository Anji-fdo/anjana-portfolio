import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anjana Fernando — Full Stack Developer",
  description:
    "Full Stack Developer specializing in modern web applications. Passionate about clean code, beautiful UIs, and seamless user experiences.",
  keywords: ["Anjana Fernando", "Full Stack Developer", "React", "Next.js", "Sri Lanka"],
  authors: [{ name: "Anjana Fernando" }],
  openGraph: {
    title: "Anjana Fernando — Full Stack Developer",
    description: "Full Stack Developer specializing in modern web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-bg text-text font-body antialiased">{children}</body>
    </html>
  );
}
