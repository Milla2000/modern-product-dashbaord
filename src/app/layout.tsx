import "./globals.css";
import type { Metadata } from "next";
import Layout from "@/components/Layout/Layout";
import Providers from "@/components/Layout/Providers";

export const metadata: Metadata = {
  title: "Product Dashboard",
  description: "Explore products with filters and search",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
