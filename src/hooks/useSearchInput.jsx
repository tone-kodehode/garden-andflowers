import { useSearchParams } from "react-router-dom"

export const useSearchInput = (paramName) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get(paramName)

  const updateQuery = (newQuery) => {
    setSearchParams({ [paramName]: newQuery })
  }

  return { query, updateQuery }
}

