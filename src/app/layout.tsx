import "./globals.css";
import Providers from"./Redux/provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers >{children}</Providers>
      </body>
    </html>
  );
}
