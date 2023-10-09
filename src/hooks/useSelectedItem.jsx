import { useState, useEffect } from "react";

// rafce arrow

/**
 * 
 * @param {number} selectedItemId - ID of the selected item
 * @param {ListItem[]} listArray - list array of items (parameter in hook)
 * @returns {ListItem | null} - selected item or null if not found
 */


export const useSelectedItem = (selectedItemId, listArray) => {
    // Manage the selected item state
    const [selectedItem, setSelectedItem] = useState(null)

    // Update the selected item when selectedItemId or listArray change
    useEffect(() => {
       const item = listArray.find((item) => item.id === selectedItemId)
       setSelectedItem(item)
    }, [selectedItemId, listArray])

    return selectedItem
}




