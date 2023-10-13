
import { useShuffleItems } from '../../hooks/useShuffleItems'
import { flowerList } from '../../data/FlowerList'
import { MinFlowerProductCard } from '../ProductCard/MinProductCard'
import RowProductListStyles from '../../styles/ProductListStyles/RowProductList.module.css'



export const MinFlowerCardProductList = () => {
    const shuffledFlowerList = useShuffleItems(flowerList.listArray)

  return (
    <section className={RowProductListStyles.productCard}>
        {shuffledFlowerList.map(({id, imageUrl, title, price, currency}) => (
            <div key={id} >
                <MinFlowerProductCard 
                    imageUrl={imageUrl}
                    title={title}
                    price={price}
                    currency={currency}
                />
            </div>    
        ))}
    </section>
  )
}

// export const MinPlantersCardProductList = () => {
//     const shuffledFlowerList = useShuffleItems(plantersList.listArray)

//   return (
//     <section className={RowProductListStyles.productCard}>
//         {shuffledFlowerList.map(({id, imageUrl, title, price, currency}) => (
//             <div key={id} >
//                 <ProductCard 
//                     imageUrl={imageUrl}
//                     title={title}
//                     price={price}
//                     currency={currency}
//                 />
//             </div>    
//         ))}
//     </section>
//   )
// }

// export const MinUtilitiesCardProductList = () => {
//     const shuffledFlowerList = useShuffleItems(utilitiesList.listArray)

//   return (
//     <section className={RowProductListStyles.productCard}>
//         {shuffledFlowerList.map(({id, imageUrl, title, price, currency}) => (
//             <div key={id} >
//                 <ProductCard 
//                     imageUrl={imageUrl}
//                     title={title}
//                     price={price}
//                     currency={currency}
//                 />
//             </div>    
//         ))}
//     </section>
//   )
// }

