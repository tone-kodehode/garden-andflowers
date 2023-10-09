import { coData } from "../../data/coData"

export const Logo = () => {
  return (
    <div>
        <img src={coData.imageUrl} alt={coData.alt} />
    </div>
  )
}
