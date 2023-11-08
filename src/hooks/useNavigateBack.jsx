import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"


export const useNavigateBack = () => {
    const [notFound, setNotFound] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        if (!notFound) {
            const timerId = setTimeout(() => {
                setNotFound(true)
                navigate(-1, {state: { error: 'Oops! 404 Page not found'}})
            }, 1000)

            return () => {
                clearTimeout(timerId)
            }
        }
    }, [notFound, navigate])

    return notFound
}

