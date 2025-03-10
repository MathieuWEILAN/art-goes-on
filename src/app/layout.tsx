import type { Metadata } from "next";
import "./globals.css";
import { AnimationProvider } from "../context/AnimationContext";
import Header from "../components/layout/Header";
import Footer from "../components/layout/footer/Footer";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AnimationProvider>
        <body className={`antialiased`}>
          <Header />
          <main className="relative z-10 bg-primary mb-[100vh]">
            {children}
          </main>
          <footer className={`fixed bottom-0 left-0 w-full`}>
            <Footer />
          </footer>
        </body>
      </AnimationProvider>
    </html>
  );
}
