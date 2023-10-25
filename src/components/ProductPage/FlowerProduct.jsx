import { useParams } from "react-router-dom"

import { ProductPage } from "./ProductPage"
import { flowerList } from "../../data/FlowerList"

export const FlowerProduct = () => {
    const {id} = useParams()
    const flower = flowerList.listArray.find((flower) => flower.id === Number(id))

    if (!flower) {
      return <div>Flower not found</div>
    }

    const handleProductClick = (productId) => {
      console.log(`Clicked on product with ID: ${productId}`);
    }
  return (
    <div className="pageContainer">
      <ProductPage {...flower} onClick={{handleProductClick}}/>
    </div>
  )
}
