import PropTypes from 'prop-types'
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';

import MaxProductCardStyles from '../../styles/ProductCardStyles/MaxProductCards.module.css'

export const MaxFlowerProductCard = ({id, onClick, imageUrl, alt, title, shortDescription, price, currency}) => {
  return (
    <section className={MaxProductCardStyles.cardContainer} onClick={() => onClick(id)}>
      <div className={MaxProductCardStyles.productCard} id={id}>
        <section className={MaxProductCardStyles.imgSection}>
          <img className={MaxProductCardStyles.imageUrl} src={imageUrl} alt={alt} />
        </section>
        <section className={MaxProductCardStyles.infoSection}>
          <h2 className={MaxProductCardStyles.title}>{title}</h2>
          <p className={MaxProductCardStyles.shortDescription}>{shortDescription}</p>
          <section className={MaxProductCardStyles.cartContainer}>
            <div className={MaxProductCardStyles.priceSection}>
              <p className={MaxProductCardStyles.price}>{price}&nbsp;</p>
              <span className={MaxProductCardStyles.currency}>{currency}</span>
            </div>
            <AddShoppingCartRoundedIcon className={MaxProductCardStyles.cart}/>
          </section>
        </section>
      </div>
    </section>
  )
}

export const MaxPlantersProductCard = ({id, onClick, imageUrl, alt, title, shortDescription, price, currency}) => {
  return (
    <section className={MaxProductCardStyles.cardContainer} onClick={() => onClick(id)}>
      <div className={MaxProductCardStyles.productCard} id={id}>
        <section className={MaxProductCardStyles.imgSection}>
          <img className={MaxProductCardStyles.imageUrl} src={imageUrl} alt={alt} />
        </section>
        <section className={MaxProductCardStyles.infoSection}>
          <h2 className={MaxProductCardStyles.title}>{title}</h2>
          <p className={MaxProductCardStyles.shortDescription}>{shortDescription}</p>
          <section className={MaxProductCardStyles.cartContainer}>
            <div className={MaxProductCardStyles.priceSection}>
              <p className={MaxProductCardStyles.price}>{price}&nbsp;</p>
              <span className={MaxProductCardStyles.currency}>{currency}</span>
            </div>
            <AddShoppingCartRoundedIcon className={MaxProductCardStyles.cart}/>
          </section>
        </section>
      </div>
    </section>
  )
}

export const MaxUtilitiesProductCard = ({id, onClick, imageUrl, alt, title, shortDescription, price, currency}) => {
  return (
    <section className={MaxProductCardStyles.cardContainer} onClick={() => onClick(id)}>
      <div className={MaxProductCardStyles.productCard} id={id}>
        <section className={MaxProductCardStyles.imgSection}>
          <img className={MaxProductCardStyles.imageUrl} src={imageUrl} alt={alt} />
        </section>
        <section className={MaxProductCardStyles.infoSection}>
          <h2 className={MaxProductCardStyles.title}>{title}</h2>
          <p className={MaxProductCardStyles.shortDescription}>{shortDescription}</p>
          <section className={MaxProductCardStyles.cartContainer}>
            <div className={MaxProductCardStyles.priceSection}>
              <p className={MaxProductCardStyles.price}>{price}&nbsp;</p>
              <span className={MaxProductCardStyles.currency}>{currency}</span>
            </div>
            <AddShoppingCartRoundedIcon className={MaxProductCardStyles.cart}/>
          </section>
        </section>
      </div>
    </section>
  )
}


// // Define prop types for the ProductCard component
MaxFlowerProductCard.propTypes = {
   id: PropTypes.number, // id is a number and required
   title: PropTypes.string.isRequired, // title is a string and required
   shortDescription: PropTypes.string, // shortDescription is a string and required
   price: PropTypes.number.isRequired, // price is a number and required
   currency: PropTypes.string.isRequired, // currency is a string and required
   imageUrl: PropTypes.string.isRequired, // imageUrl is a string and required
   alt: PropTypes.string,
   onClick: PropTypes.func, // onClick is a function and required
};

// // Define prop types for the ProductCard component
MaxPlantersProductCard.propTypes = {
  id: PropTypes.number, // id is a number and required
  title: PropTypes.string.isRequired, // title is a string and required
  shortDescription: PropTypes.string, // shortDescription is a string and required
  price: PropTypes.number.isRequired, // price is a number and required
  currency: PropTypes.string.isRequired, // currency is a string and required
  imageUrl: PropTypes.string.isRequired, // imageUrl is a string and required
  alt: PropTypes.string,
  onClick: PropTypes.func, // onClick is a function and required
};

// // Define prop types for the ProductCard component
MaxUtilitiesProductCard.propTypes = {
  id: PropTypes.number, // id is a number and required
  title: PropTypes.string.isRequired, // title is a string and required
  shortDescription: PropTypes.string, // shortDescription is a string and required
  price: PropTypes.number.isRequired, // price is a number and required
  currency: PropTypes.string.isRequired, // currency is a string and required
  imageUrl: PropTypes.string.isRequired, // imageUrl is a string and required
  alt: PropTypes.string,
  onClick: PropTypes.func, // onClick is a function and required
};