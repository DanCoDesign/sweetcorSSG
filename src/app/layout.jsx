import '../globals.css'
import { Sen } from 'next/font/google'

import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { AuthProvider } from './providers/Providers';

const inter = Sen({ subsets: ['latin'] })

export const metadata = {
  title: 'Sweetcor Blog',
  description: 'The best custom blog app!',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
