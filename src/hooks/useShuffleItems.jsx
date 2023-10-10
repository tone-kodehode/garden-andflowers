import { useState, useEffect } from "react";

/**
 * custom hook to shuffle a list of items.
 * @param {ListItem[]} listArray - list items to shuffle
 * @returns {ListItem[]} returns shuffled list of items
 */


export const useShuffleItems = (listArray) => {
    const [shuffledItems, setShuffledItems] = useState([]);

    useEffect(() => {
       const shuffledArray = listArray.sort(() => Math.random() - 0.5);
       setShuffledItems(shuffledArray)
    }, [listArray])

    return shuffledItems
}
