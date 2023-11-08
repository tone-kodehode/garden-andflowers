import { Link } from "react-router-dom";
import { MinFlowerProductCard } from "../ProductCard/MinProductCard";
import mapArray from "../../utils/mapArray"
import { flowerList } from "../../data/flowerList";

import RowProductListStyles from '../../styles/ProductListStyles/RowProductList.module.css'

// row css

export const MinCard = () => {
    const {listArray} = flowerList
    return (
        <div className={RowProductListStyles.productCard}>
            {mapArray(listArray, ({id, imageUrl, title, price, currency}) => (
                <div key={id} >
                <Link key={id} to={`/flowers/${id}`} >
                    <MinFlowerProductCard 
                        imageUrl={imageUrl}
                        title={title}
                        price={price}
                        currency={currency}
                    />
                    </Link>
            </div> 
            ))}
        </div>
  )
}

