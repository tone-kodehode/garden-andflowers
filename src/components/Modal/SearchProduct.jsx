import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { flowerList } from '../../data/flowerList'; 
import { MinFlowerProductCard } from '../ProductCard/MinProductCard';
import { useModal } from '../../hooks/useModal';
import { useNavigate } from 'react-router-dom';
import { SearchResultsButton } from '../Button/searchResultsButton';

import ColumnProductListStyles from '../../styles/ProductListStyles/ColumnProductList.module.css'

import ModalBoxStyles from '../../styles/ModalStyles/Modal.module.css'


export const SearchProduct = () => {
    const {closeModal} = useModal()

    const navigate = useNavigate()

    const handleInputKeyDown = (event) => {
        if (event.key === 'Enter') {
          closeModal()
          navigate('/searchresult', { state: { results } })
        }
    }
      
    const [searchQuery, setSearchQuery] = useState('')
    const [results, setResults] = useState([])

    const data = flowerList.listArray

    const handleSearch = (query) => {
        setSearchQuery(query);
    }

    useEffect(() => {
        if (searchQuery) {
            const filteredResults = data.filter((item) =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            setResults(filteredResults)
        } else {
            setResults([])
        }
    }, [data, searchQuery])

    return (
       
        <div className={ModalBoxStyles.searchModal}>
            <div className={ModalBoxStyles.searchBar}>
                <input
                    className={ModalBoxStyles.input}
                    type="text"
                    placeholder="Search Garden & Flowers..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    onKeyDown={handleInputKeyDown}
                />
            </div>
            {searchQuery && ( 
            <div className={ModalBoxStyles.searchResults} >
                <div className={ColumnProductListStyles.productCard} >
                    {results.map((result, id) => (
                        <div key={result.id} >
                            {result.imageUrl && result.currency && (
                                <Link key={id} to={`/flowers/${result.id}`}>
                                    <MinFlowerProductCard
                                        id={result.id}
                                        title={result.title}
                                        imageUrl={result.imageUrl}
                                        alt={result.alt}
                                        price={result.price}
                                        currency={result.currency}
                                        // buttons={result.buttons}
                                        
                                    />
                                </Link>
                            )}
                        </div>  
                    ))}
                </div>
                <SearchResultsButton closeModal={closeModal}/>
            </div>
            )}  
        </div>
    )
}






  