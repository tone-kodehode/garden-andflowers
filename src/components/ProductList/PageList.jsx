//import useParams from "react-router-dom"

import { FlowerProductPage } from "../ProductPage/ProductPage";
import flowerList from '../../data/flowerList'

export function ProductFlowerPageList() {
    //const { id } = useParams();
    const flower = flowerList.flowers.find((flower) => flower.id === Number(id));
  
    if (!flower) {
      return <div>Flower not found</div>;
    }

    const handleProductClick = (productId) => {
        console.log(`Clicked on product with ID: ${productId}`);
    };
  
    return (
        <div className="ProductSection">
            <FlowerProductPage {...flower} onClick={handleProductClick} />
        </div>
    
    
    ) 
  }