import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const useNavigateHome = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
        navigate('/', {state: 'Oops! 404 Page not found'}) 
    }, 1000)
    }, [])

}


