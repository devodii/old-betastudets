import './global.css';

export const metadata = {
  title: 'Course Outline Generator',
  description: 'Course Outline Generator By BetaStudents',
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
