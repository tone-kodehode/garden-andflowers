import { useShuffleItems } from '../../hooks/useShuffleItems'
import { flowerList } from '../../data/FlowerList'
import { FlowerProductCard } from '../ProductCard/ProductCard'
import ProductListStyles from '../../styles/ProductListStyles/ProductList.module.css'

export const FlowerCardProductList = () => {
    const shuffledFlowerList = useShuffleItems(flowerList.listArray)

  return (
    <section className={ProductListStyles.productCard}>
        {shuffledFlowerList.map(({id, imageUrl, title, shortDescription, price, currency}) => (
            <div key={id} >
                <FlowerProductCard 
                    imageUrl={imageUrl}
                    title={title}
                    shortDescription={shortDescription}
                    price={price}
                    currency={currency}
                />
            </div>    
        ))}
    </section>
  )
}

