import { useShuffleItems } from '../../hooks/useShuffleItems'
import { flowerList } from '../../data/FlowerList'
import { FlowerProductCard } from '../ProductCard/ProductCard'
import ColumnProductListStyles from '../../styles/ProductListStyles/ColumnProductList.module.css'

export const FlowerCardProductList = () => {
    const shuffledFlowerList = useShuffleItems(flowerList.listArray)

  return (
    <section className={ColumnProductListStyles.productCard}>
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

// export const PlantersCardProductList = () => {
//     const shuffledFlowerList = useShuffleItems(plantersList.listArray)

//   return (
//     <section className={ColumnProductListStyles.productCard}>
//         {shuffledFlowerList.map(({id, imageUrl, title, shortDescription, price, currency}) => (
//             <div key={id} >
//                 <ProductCard 
//                     imageUrl={imageUrl}
//                     title={title}
//                     shortDescription={shortDescription}
//                     price={price}
//                     currency={currency}
//                 />
//             </div>    
//         ))}
//     </section>
//   )
// }

// export const UtilitiesCardProductList = () => {
//     const shuffledFlowerList = useShuffleItems(utilitiesList.listArray)

//   return (
//     <section className={ColumnProductListStyles.productCard}>
//         {shuffledFlowerList.map(({id, imageUrl, title, shortDescription, price, currency}) => (
//             <div key={id} >
//                 <ProductCard 
//                     imageUrl={imageUrl}
//                     title={title}
//                     shortDescription={shortDescription}
//                     price={price}
//                     currency={currency}
//                 />
//             </div>    
//         ))}
//     </section>
//   )
// }

