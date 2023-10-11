//rfc // rafce array
import { Announcement } from '../components/Navbar/Announcement'
import Navbar from "../components/Navbar/Navbar";

import { BannerDisplay } from "../components/Banner/BannerDisplay";
//import { CategoriesCard } from '../components/Categories/CategoriesCard';
import { CategoriesDisplay } from '../components/Categories/CategoriesDisplay';

// style test
import Cart from './Cart';
import LogIn from './LogIn';
import Register from './Register';



export default function GardenAndFlowers() {

  return (
    <>
      <Announcement />
      <Navbar />
      <BannerDisplay id={0} type="image"/>
      {/* <CategoriesCard /> */}
      <CategoriesDisplay />


      <Cart />
      <LogIn />
      <Register />

    </>
  )
}





