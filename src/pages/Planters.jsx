import { BannerDisplay } from "../components/Banner/BannerDisplay"
import { MinCard } from "../components/ProductList/RowMinCard"

export const Planters = () => {
  return (
    <div className="grayBody">
      <div className="main">
        <BannerDisplay id={3} type="text"/>
      </div>

      <div className="main margin">
      <MinCard />
      </div>
    </div>
    
  )
}
