import { Link } from "react-router-dom"
import { coData } from "../../data/coData"

export const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img src={coData.imageUrl} alt={coData.alt} />
      </Link >
        
    </div>
  )
}
