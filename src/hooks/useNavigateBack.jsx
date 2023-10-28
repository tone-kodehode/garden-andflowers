import { useNavigate } from "react-router-dom"
import { useEffect } from "react"


export const useNavigateBack = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
        navigate(-1)
    }, 1000)
    }, [])

}