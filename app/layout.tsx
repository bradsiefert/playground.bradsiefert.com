import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./assets/index.css";
import { ThemeProvider } from "next-themes";

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: "UI Playground",
  description: "A playground for UI experiments and inspiration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sourceSans3.variable} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
