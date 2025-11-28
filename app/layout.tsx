import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Amir Qushairi Jais - Portfolio",
  description: "Lead Server Engineer | Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          <header className="border-b">
            <div className="container mx-auto px-5 py-8">
              <nav className="flex justify-between items-center">
                <a href="/" className="text-2xl font-bold tracking-tight text-gray-900">
                  Amir Qushairi
                </a>
                <div className="flex gap-6">
                  <a href="/" className="text-gray-700 hover:text-gray-900 hover:underline">Home</a>
                  <a href="/portfolio" className="text-gray-700 hover:text-gray-900 hover:underline">Portfolio</a>
                  <a href="/resume" className="text-gray-700 hover:text-gray-900 hover:underline">Resume</a>
                  <a href="/#contact" className="text-gray-700 hover:text-gray-900 hover:underline">Contact</a>
                </div>
              </nav>
            </div>
          </header>
          {children}
          <footer className="border-t">
            <div className="container mx-auto px-5 py-12">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">
                  © 2024 Muhammad Amir Qushairi Jais
                </p>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/m-amirqushairi-jais" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/muhammad-amir-qushairi-jais" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}