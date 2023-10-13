
import { useShuffleItems } from '../../hooks/useShuffleItems'
import { flowerList } from '../../data/FlowerList'
import { MaxFlowerProductCard } from '../ProductCard/MaxProductCard'
import RowProductListStyles from '../../styles/ProductListStyles/RowProductList.module.css'



export const MaxFlowerCardProductList = () => {
    const shuffledFlowerList = useShuffleItems(flowerList.listArray)

  return (
    <section className={RowProductListStyles.productCard}>
        {shuffledFlowerList.map(({id, imageUrl, title, price, currency, shortDescription}) => (
            <div key={id} >
                <MaxFlowerProductCard 
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

// export const MaxPlantersCardProductList = () => {
//     const shuffledFlowerList = useShuffleItems(plantersList.listArray)

//   return (
//     <section className={RowProductListStyles.productCard}>
//         {shuffledFlowerList.map(({id, imageUrl, title, price, currency, shortDescription}) => (
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

// export const MaxUtilitesCardProductList = () => {
//     const shuffledFlowerList = useShuffleItems(utilites.listArray)

//   return (
//     <section className={RowProductListStyles.productCard}>
//         {shuffledFlowerList.map(({id, imageUrl, title, price, currency, shortDescription}) => (
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