import Navbar from './Navbar'
import Footer from './Footer'

 
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className='bg-beige' >{children}</main>
      <Footer />
    </>
  )
}