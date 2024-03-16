import { Toaster } from '@betastudents/ui'
import './global.css'

export const metadata = {
  title: 'Course Outline Generator',
  description: 'Course Outline Generator By BetaStudents',
}

export default async function RootLayout({
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
