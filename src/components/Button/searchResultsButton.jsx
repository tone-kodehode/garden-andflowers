
import { useUrlButton } from "../../hooks/useUrlButton";

export const SearchResultsButton = ({closeModal}) => {
    
    const navigateToSearchResult = useUrlButton()

    const handleButtonClick = () => {
        closeModal();
        navigateToSearchResult('/searchresult')
    }

    return <button onClick={handleButtonClick}>Show all results</button>
}
