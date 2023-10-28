
import { BannerDisplay } from "../components/Banner/BannerDisplay"
import { Navigate } from "react-router-dom"


export const NoPage = () => {
  

  return (
    <div>
      <Navigate to='/' /> 
      <BannerDisplay id={2} type="image"/>
    </div>
  )
}






