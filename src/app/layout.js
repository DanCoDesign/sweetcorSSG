import './globals.css'
import { Sen } from 'next/font/google'

import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";


const inter = Sen({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        {children}
        <Footer />

      </body>
    </html>
  )
}
