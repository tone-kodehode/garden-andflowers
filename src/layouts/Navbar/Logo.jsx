import { Link } from "react-router-dom"
import { coData } from "../../data/coData"
import Logo24 from '../../assets/Logo/logo24.svg'
export const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img src={coData.imageUrl} alt={coData.alt} />
      </Link >
        
    </div>
  )
}

export const LogoMin = () => {
  return (
    <div>
      <Link to="/">
        <img src={Logo24} alt={coData.alt} />
      </Link >
        
    </div>
  )
}
