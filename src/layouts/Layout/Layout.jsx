
import { Outlet } from 'react-router-dom';
import Navbar from "../Navbar/Navbar"
import { Footer } from "../Fotter/Footer"



export const Layout = () => {
  return (

    <div className="layoutContainer">
      <Navbar />
      
      <main>
        <Outlet />
      </main>
      
      <Footer />
    </div>
    
  )
}


