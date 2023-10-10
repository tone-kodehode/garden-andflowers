import PropTypes from 'prop-types'
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';

import ProductCardsStyles from '../../styles/CardsStyles/ProductCard.module.css'

export const ProductCard = ({ id, title, shortDescription, price, currency, imageUrl, onClick }) => (

  <section className={ProductCardsStyles.cardContainer} onClick={() => onClick(id)}>
    <div className={ProductCardsStyles.ProductCard} id={id}>
      <img className={ProductCardsStyles.imageUrl} src={imageUrl} alt={title} />
      <h2 className={ProductCardsStyles.title}>{title}</h2>
      <p className={ProductCardsStyles.shortDescription}>{shortDescription}</p>
      <div className={ProductCardsStyles.cartContainer}>
        <p className={ProductCardsStyles.price}>
          {price}&nbsp;
          <span className={ProductCardsStyles.currency}>{currency}</span>
        </p>
        <form>
          <AddShoppingCartRoundedIcon className={ProductCardsStyles.cart}/>
        </form>
      </div>
    </div>
  </section>
)

// Define prop types for the ProductCard component
ProductCard.propTypes = {
  id: PropTypes.number.isRequired, // id is a number and required
  title: PropTypes.string.isRequired, // title is a string and required
  shortDescription: PropTypes.string.isRequired, // shortDescription is a string and required
  price: PropTypes.number.isRequired, // price is a number and required
  currency: PropTypes.string.isRequired, // currency is a string and required
  imageUrl: PropTypes.string.isRequired, // imageUrl is a string and required
  onClick: PropTypes.func.isRequired, // onClick is a function and required
};

