import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MusicPlayer from "@/components/MusicPlayer";

export const metadata: Metadata = {
  title: "Bintang Kusuma Ilham | Portfolio",
  description: "Frontend & Mobile Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <MusicPlayer />
      </body>
    </html>
  );
}