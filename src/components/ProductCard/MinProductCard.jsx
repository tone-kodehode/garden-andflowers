import PropTypes from 'prop-types'
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';

import MinProductCardsStyles from '../../styles/ProductCardStyles/MinProductCards.module.css'


export const MinFlowerProductCard = ({id, imageUrl, alt, title, shortDescription, price, currency}) => {

  return (
    <section className={MinProductCardsStyles.cardContainer} >
      <div className={MinProductCardsStyles.productCard} id={id}>
        <section className={MinProductCardsStyles.imgSection}>
          <img className={MinProductCardsStyles.imageUrl} src={imageUrl} alt={alt} />
        </section>
        <section className={MinProductCardsStyles.infoSection}>
          <h2 className={MinProductCardsStyles.title}>{title}</h2>
          <p className={MinProductCardsStyles.shortDescription}>{shortDescription}</p>
          <section className={MinProductCardsStyles.cartContainer}>
            <div className={MinProductCardsStyles.priceSection}>
              <p className={MinProductCardsStyles.price}>{price}&nbsp;</p>
              <span className={MinProductCardsStyles.currency}>{currency}</span>
            </div>
            <AddShoppingCartRoundedIcon className={MinProductCardsStyles.cart}/>
          </section>
        </section>
      </div>
    </section>
  )
}

export const MinPlantersProductCard = ({id, onClick, imageUrl, alt, title, shortDescription, price, currency}) => {
  return (
    <section className={MinProductCardsStyles.cardContainer} onClick={() => onClick(id)}>
      <div className={MinProductCardsStyles.productCard} id={id}>
        <section className={MinProductCardsStyles.imgSection}>
          <img className={MinProductCardsStyles.imageUrl} src={imageUrl} alt={alt} />
        </section>
        <section className={MinProductCardsStyles.infoSection}>
          <h2 className={MinProductCardsStyles.title}>{title}</h2>
          <p className={MinProductCardsStyles.shortDescription}>{shortDescription}</p>
          <section className={MinProductCardsStyles.cartContainer}>
            <div className={MinProductCardsStyles.priceSection}>
              <p className={MinProductCardsStyles.price}>{price}&nbsp;</p>
              <span className={MinProductCardsStyles.currency}>{currency}</span>
            </div>
            <AddShoppingCartRoundedIcon className={MinProductCardsStyles.cart}/>
          </section>
        </section>
      </div>
    </section>
  )
}

export const MinUtilitiesProductCard = ({id, onClick, imageUrl, alt, title, shortDescription, price, currency}) => {
  return (
    <section className={MinProductCardsStyles.cardContainer} onClick={() => onClick(id)}>
      <div className={MinProductCardsStyles.productCard} id={id}>
        <section className={MinProductCardsStyles.imgSection}>
          <img className={MinProductCardsStyles.imageUrl} src={imageUrl} alt={alt} />
        </section>
        <section className={MinProductCardsStyles.infoSection}>
          <h2 className={MinProductCardsStyles.title}>{title}</h2>
          <p className={MinProductCardsStyles.shortDescription}>{shortDescription}</p>
          <section className={MinProductCardsStyles.cartContainer}>
            <div className={MinProductCardsStyles.priceSection}>
              <p className={MinProductCardsStyles.price}>{price}&nbsp;</p>
              <span className={MinProductCardsStyles.currency}>{currency}</span>
            </div>
            <AddShoppingCartRoundedIcon className={MinProductCardsStyles.cart}/>
          </section>
        </section>
      </div>
    </section>
  )
}


// // Define prop types for the ProductCard component
MinFlowerProductCard.propTypes = {
   id: PropTypes.number, // id is a number and required
   title: PropTypes.string.isRequired, // title is a string and required
   shortDescription: PropTypes.string, // shortDescription is a string and required
   price: PropTypes.number.isRequired, // price is a number and required
   currency: PropTypes.string.isRequired, // currency is a string and required
   imageUrl: PropTypes.string.isRequired, // imageUrl is a string and required
   alt: PropTypes.string,
   onClick: PropTypes.func, // onClick is a function and required
}

// // Define prop types for the ProductCard component
MinPlantersProductCard.propTypes = {
  id: PropTypes.number, // id is a number and required
  title: PropTypes.string.isRequired, // title is a string and required
  shortDescription: PropTypes.string, // shortDescription is a string and required
  price: PropTypes.number.isRequired, // price is a number and required
  currency: PropTypes.string.isRequired, // currency is a string and required
  imageUrl: PropTypes.string.isRequired, // imageUrl is a string and required
  alt: PropTypes.string,
  onClick: PropTypes.func, // onClick is a function and required
}

// // Define prop types for the ProductCard component
MinUtilitiesProductCard.propTypes = {
  id: PropTypes.number, // id is a number and required
  title: PropTypes.string.isRequired, // title is a string and required
  shortDescription: PropTypes.string, // shortDescription is a string and required
  price: PropTypes.number.isRequired, // price is a number and required
  currency: PropTypes.string.isRequired, // currency is a string and required
  imageUrl: PropTypes.string.isRequired, // imageUrl is a string and required
  alt: PropTypes.string,
  onClick: PropTypes.func, // onClick is a function and required
}