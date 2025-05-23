import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Astro-Planetarium",
  description: "이 웹사이트는 심리테스트를 제공하는 사이트입니다.",
  openGraph: {
    title: "Astro-Planetarium",
    description: "웹사이트의 기본 설명",
    url: "https://astro-planetarium.vercel.app/", // 여기서는 사이트의 기본 URL을 넣어줍니다.
    images: [
      {
        url: "/Meta.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=SUIT:wght@300;400;500&display=swap"
        />
      </head>
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
