import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Star Wars Characters",
  description: "A list of Star Wars characters using SWAPI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h1>Star Wars Characters</h1>
        {children}
      </body>
    </html>
  );
}
