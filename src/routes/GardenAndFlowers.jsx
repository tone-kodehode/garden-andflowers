//rfc // rafce array
import { Announcement } from '../components/Navbar/Announcement'
import Navbar from "../components/Navbar/Navbar";

import { BannerDisplay } from "../components/Banner/BannerDisplay";
//import { CategoriesCard } from '../components/Categories/CategoriesCard';
import { CategoriesDisplay } from '../components/Categories/CategoriesDisplay';
export default function GardenAndFlowers() {


  return (
    <>
      <Announcement />
      <Navbar />
      <BannerDisplay id={0} type="image"/>
      {/* <CategoriesCard /> */}
      <CategoriesDisplay />

    </>
  )
}





