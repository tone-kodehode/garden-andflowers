
import { BannerDisplay } from "../components/Banner/BannerDisplay"
import { MinCard } from "../components/ProductList/RowMinCard"
//import SearchProduct from "../components/Modal/SearchProduct"

import { MinFlowerCardProductList } from "../components/ProductList/MinCardProductList"
export const GardenBlog = () => {
  return (
    <div>  
     <div className="main">
     {/* <SearchProduct /> */}
  
     </div>
      <BannerDisplay id={4} type="image"/>
      <MinCard /> 
      <MinFlowerCardProductList/>
    </div>
  )
}




