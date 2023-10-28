import { useParams } from "react-router-dom"

import { ProductPage } from "./ProductPage"
import { flowerList } from "../../data/FlowerList"
import { useNavigateBack } from "../../hooks/useNavigateBack"

export const FlowerProduct = () => {
    const {id} = useParams()
    const flower = flowerList.listArray.find((flower) => flower.id === Number(id))
    const navigateBack = useNavigateBack(!flower)

    if (!flower) {
      console.log("Flower not found");
      return navigateBack 
    }

    const handleProductClick = (productId) => {
      console.log(`Clicked on product with ID: ${productId}`)
    }
  return (
    <div className="pageContainer">
      <ProductPage {...flower} onClick={{handleProductClick}}/>
    </div>
  )
}

