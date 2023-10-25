import { BannerDisplay } from "../components/Banner/BannerDisplay"
import { FlowerCardProductList } from "../components/ProductList/CardProductList"

export const Flowers = () => {
  return (
    <div>
        <BannerDisplay id={1} type="text"/>
        <FlowerCardProductList />

    </div>
  )
}



