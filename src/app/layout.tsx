import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../providers/theme-provider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "List.Data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Toaster position="top-center" />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
