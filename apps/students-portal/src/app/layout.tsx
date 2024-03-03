import "./global.css";

export const metadata = {
  title: "Beta Students",
  description: "The #1 education scheduling app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
