//rfc // rafce array

import { BannerDisplay } from "../components/Banner/BannerDisplay";
//import { CategoriesCard } from '../components/Categories/CategoriesCard';
import { CategoriesDisplay } from '../components/Categories/CategoriesDisplay';
import { JoinUsForm } from "../components/Forms/JoinUsForm";
import { MinCard } from "../components/ProductList/RowMinCard";


export const GardenAndFlowers = () => {
  return (
    <>
    
      <BannerDisplay id={0} type="image"/>
      <CategoriesDisplay />
      <JoinUsForm />
      

      <div className="main margin">
      <MinCard />
      </div>
     
      
    </>
  )
}






