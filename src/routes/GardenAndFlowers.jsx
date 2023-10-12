//rfc // rafce array
import { Announcement } from '../components/Navbar/Announcement'
import Navbar from "../components/Navbar/Navbar";

import { BannerDisplay } from "../components/Banner/BannerDisplay";
//import { CategoriesCard } from '../components/Categories/CategoriesCard';
import { CategoriesDisplay } from '../components/Categories/CategoriesDisplay';

// style test
import { RegisterForm } from '../components/Forms/RegisterForm';
import { SignInForm } from '../components/Forms/SignInForm';
import { CartCard } from '../components/Cart/CartCard';
import { JoinUsForm } from '../components/Forms/JoinUs';
import { FlowerCardProductList } from '../components/ProductList/CardProductList';


export default function GardenAndFlowers() {

  return (
    <>
      <Announcement />
      <Navbar />
      <BannerDisplay id={0} type="image"/>
      {/* <CategoriesCard /> */}
      <CategoriesDisplay />


 
      {/* style test */}

      <RegisterForm />
      <SignInForm />
      <CartCard />
      <JoinUsForm />
      <FlowerCardProductList />
   
   
    


    </>
  )
}





