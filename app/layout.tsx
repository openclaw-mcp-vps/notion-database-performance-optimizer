import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Notion Database Performance Optimizer",
  description: "Speed up slow Notion databases. Analyze your workspace, find bottlenecks, and get actionable optimization recommendations."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="cdf9c5c9-fbab-409b-8050-6b4876861648"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
