import type { Metadata } from "next"
import "@/app/globals.css"

export const metadata: Metadata = {
  title: "Viandra Kit",
  description: "A modern starter kit by Viandra.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}