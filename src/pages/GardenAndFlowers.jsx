//rfc // rafce array

import { BannerDisplay } from "../components/Banner/BannerDisplay";
//import { CategoriesCard } from '../components/Categories/CategoriesCard';
import { CategoriesDisplay } from '../components/Categories/CategoriesDisplay';
import { JoinUsForm } from "../components/Forms/JoinUsForm";



export const GardenAndFlowers = () => {
  return (
    <>
      <BannerDisplay id={0} type="image"/>
      <CategoriesDisplay />
      <JoinUsForm />

      <div className="main">
        
      </div>
      {/* <CategoriesCard /> */}
      
    </>
  )
}






