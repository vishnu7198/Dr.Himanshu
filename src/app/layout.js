import Footer from './Footer'
import './globals.css'
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.css';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
