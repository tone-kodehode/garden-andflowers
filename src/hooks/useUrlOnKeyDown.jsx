import { useNavigate } from "react-router-dom";

export const useUrlOnKeyDown = () => {
  const navigate = useNavigate()

  const handleKeyDown = (url, event, closeModal) => {
    if (event.key === 'Enter' && url) {
      closeModal()
      navigate(url)
    }
  }

  return { handleKeyDown }
}


