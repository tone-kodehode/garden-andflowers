import { useNavigate } from "react-router-dom"
import { useEffect } from "react"


export const useNavigateBack = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
        navigate(-1, {state: 'Oops! 404 Page not found'})
    }, 1000)
    }, [])

}