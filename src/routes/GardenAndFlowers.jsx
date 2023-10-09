//rfc // rafce array
import { Announcement } from '../components/Navbar/Announcement'
import Navbar from "../components/Navbar/Navbar";

import { BannerDisplay } from "../components/Banner/BannerDisplay";

export default function GardenAndFlowers() {


  return (
    <>
      <Announcement />
      <Navbar />
      <BannerDisplay id={0} type="image"/>
    </>
  )
}





