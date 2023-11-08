import { useState, useEffect } from 'react';

export const useFilter = (data, initialFilter) => {
  const [filter, setFilter] = useState(initialFilter)
  const [filteredData, setFilteredData] = useState(data)

  useEffect(() => {
    // Perform filtering when the filter or data changes
    const filtered = data.filter((item) => {
      return item.name === filter
    })
    setFilteredData(filtered)
  }, [data, filter])

  const updateFilter = (newFilter) => {
    setFilter(newFilter)
  }

  return {filter, filteredData, updateFilter}
}



