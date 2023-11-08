import { Link } from 'react-router-dom'
import { useShuffleItems } from '../../hooks/useShuffleItems'
import { flowerList } from '../../data/flowerList'
import { FlowerProductCard } from '../ProductCard/ProductCard'
import ColumnProductListStyles from '../../styles/ProductListStyles/ColumnProductList.module.css'

export const FlowerCardProductList = () => {
    const shuffledFlowerList = useShuffleItems(flowerList.listArray)



  return (
    <section className={ColumnProductListStyles.productCard}>
        {shuffledFlowerList.map(({id, imageUrl, title, shortDescription, price, currency}) => (
            <Link key={id} to={`/flowers/${id}`} >
                <FlowerProductCard 
                    id={id}
                    imageUrl={imageUrl}
                    title={title}
                    shortDescription={shortDescription}
                    price={price}
                    currency={currency}
                />
            </Link>   
        ))}
    </section>
  )
}



