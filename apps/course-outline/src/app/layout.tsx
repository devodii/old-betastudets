import './global.css'
import { Toaster } from '@betastudents/ui'

export const metadata = {
  title: 'Course Outline Generator',
  description: 'Course Outline Generator By BetaStudents',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
