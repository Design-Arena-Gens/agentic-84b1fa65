import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kling | Real-time Multimodal Storyteller",
  description:
    "Kling blends AI storytelling with immersive multimedia to help teams craft compelling interactive narratives in minutes."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
