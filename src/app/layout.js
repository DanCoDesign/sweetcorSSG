import './globals.css'
import { Sen } from 'next/font/google'

import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { AuthProvider } from './providers/Providers';

const inter = Sen({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="text-black bg-red-500 text-2xl text-center p-8" >
            This Template is not complete. There are still pages to be added along with components and full functionality of the blog. A new update is deployed daily! :)
          </div>
          <Navbar />

          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
