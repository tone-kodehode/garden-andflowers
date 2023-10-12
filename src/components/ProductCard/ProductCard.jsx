import PropTypes from 'prop-types'
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';

import ProductCardsStyles from '../../styles/ProductStyles/ProductCards.module.css'



export const FlowerProductCard = ({id, onClick, imageUrl, alt, title, shortDescription, price, currency}) => {
  return (
    <section className={ProductCardsStyles.cardContainer} onClick={() => onClick(id)}>
      <div className={ProductCardsStyles.productCard} id={id}>
        <section className={ProductCardsStyles.imgSection}>
          <img className={ProductCardsStyles.imageUrl} src={imageUrl} alt={alt} />
        </section>
        <section className={ProductCardsStyles.infoSection}>
          <h2 className={ProductCardsStyles.title}>{title}</h2>
          <p className={ProductCardsStyles.shortDescription}>{shortDescription}</p>
          <section className={ProductCardsStyles.cartContainer}>
            <div className={ProductCardsStyles.priceSection}>
              <p className={ProductCardsStyles.price}>{price}&nbsp;</p>
              <span className={ProductCardsStyles.currency}>{currency}</span>
            </div>
            <AddShoppingCartRoundedIcon className={ProductCardsStyles.cart}/>
          </section>
        </section>
      </div>
    </section>
  )
}


// // Define prop types for the ProductCard component
FlowerProductCard.propTypes = {
   id: PropTypes.number, // id is a number and required
   title: PropTypes.string.isRequired, // title is a string and required
   shortDescription: PropTypes.string, // shortDescription is a string and required
   price: PropTypes.number.isRequired, // price is a number and required
   currency: PropTypes.string.isRequired, // currency is a string and required
   imageUrl: PropTypes.string.isRequired, // imageUrl is a string and required
   alt: PropTypes.string,
   onClick: PropTypes.func, // onClick is a function and required
};

