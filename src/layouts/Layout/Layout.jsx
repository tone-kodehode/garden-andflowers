
import { Outlet } from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar"
import { Footer } from "../Fotter/Footer"



export const Layout = () => {
  return (

    <div className="layoutContainer">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
    
  )
}


