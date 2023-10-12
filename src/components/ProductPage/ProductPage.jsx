//import PropTypes from 'prop-types'

import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import LocalFloristRoundedIcon from '@mui/icons-material/LocalFloristRounded';
import { ShowHideButton } from '../Button/ShowHideButton';
import ProductPageStyles from '../../styles/ProductStyles/ProductPage.module.css'

export const FlowerProductPage = ({id, onClick, imageUrl, alt, title, climateZone, category, shortDescription, price, currency, cycle, description}) => {
  return (
    <section className={ProductPageStyles.pageContainer} onClick={() => onClick(id)}>
      <div className={ProductPageStyles.productCard} id={id}>
        <article className={ProductPageStyles.article}>
          <img className={ProductPageStyles.imageUrl} src={imageUrl} alt={alt} />
        </article>
        <article className={ProductPageStyles.article}>
          <h2 className={ProductPageStyles.title}>{title}</h2>
          <section className={ProductPageStyles.categoryContainer}>
            <p className={ProductPageStyles.id}>ID {id}</p>
            <p className={ProductPageStyles.climateZone}>{climateZone}</p>
            <p className={ProductPageStyles.category}>{category}</p>
          </section>
          <p className={ProductPageStyles.shortDescription}>{shortDescription}</p>
          <section className={ProductPageStyles.cartContainer}>
            <p className={ProductPageStyles.price}>{price}&nbsp;</p>
            <span className={ProductPageStyles.currency}>{currency}</span>
            <AddShoppingCartRoundedIcon />
          </section>
          <section className={ProductPageStyles.categoryContainer}>
            <p className={ProductPageStyles.cycle}><LocalFloristRoundedIcon /> {cycle}</p>
          </section>
          <ShowHideButton content={<p className={ProductPageStyles.description}>{description}</p>} />
        </article>
      </div>
    </section>
  )
}


// FlowerProductPage.propTypes = {
//   imageUrl: PropTypes.string.isRequired, 
//   alt: PropTypes.string.isRequired, 
//   title: PropTypes.string.isRequired, 
//   id: PropTypes.number.isRequired,
//   climateZone: PropTypes.string, 
//   category: PropTypes.string, 
//   shortDescription: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]), // topLeftTagline can be a string or an array of strings
//   description: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]), // topLeftTagline can be a string or an array of strings
//   price: PropTypes.number.isRequired,
//   currency: PropTypes.string.isRequired,
//   buttons: PropTypes.arrayOf(
//     PropTypes.shape({
//       label: PropTypes.string.isRequired,
//       url: PropTypes.string.isRequired,
//     })
//   ), // buttons array of objects with label and url properties required string
// }

