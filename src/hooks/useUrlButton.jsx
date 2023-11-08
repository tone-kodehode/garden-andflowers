
import { useNavigate } from "react-router-dom"

export const useUrlButton = () => {
    const navigate = useNavigate()

    const handleButtonClick = (url) => {
        if (url) {
            navigate(url)
        }
    }
    
  return handleButtonClick
}
