import PropTypes from 'prop-types'
import { CounterButtons } from '../Button/CounterButtons';

//import LocalFloristRoundedIcon from '@mui/icons-material/LocalFloristRounded';
import { ShowHideButton } from '../Button/ShowHideButton';
import ProductPageStyles from '../../styles/ProductPageStyles/ProductPage.module.css'

export const ProductPage = ({id, imageUrl, alt, title, shortDescription, price, currency, description}) => {
  return (
    <section className={ProductPageStyles.pageContainer} >
      <div className={ProductPageStyles.productCard} id={id}>
        <article className={ProductPageStyles.article}>
          <img className={ProductPageStyles.imageUrl} src={imageUrl} alt={alt} />
        </article>

        <article className={ProductPageStyles.infoarticle}>
          <h2 className={ProductPageStyles.title}>{title}</h2>
          <section className={ProductPageStyles.categoryContainer}>
            <p className={ProductPageStyles.id}>ID {id}</p>
            {/* <p className={ProductPageStyles.climateZone}>{climateZone}</p>
            <p className={ProductPageStyles.category}>{category}</p> */}
          </section>

          <p className={ProductPageStyles.shortDescription}>{shortDescription}</p>

          <section className={ProductPageStyles.cartContainer}>
            <div className={ProductPageStyles.priceContainer}>
              <p className={ProductPageStyles.price}>{price}&nbsp;</p>
              <span className={ProductPageStyles.currency}>{currency}</span>
            </div>
            
            <div>
              <CounterButtons />
            </div>
            
          </section>
          <section className={ProductPageStyles.categoryContainer}>
            {/* <p className={ProductPageStyles.cycle}><LocalFloristRoundedIcon /> {cycle}</p> */}
          </section>
          <ShowHideButton content={<p className={ProductPageStyles.ShowHide}>{description}</p>} />
        </article>
      </div>
    </section>
  )
}


ProductPage.propTypes = {
  imageUrl: PropTypes.string.isRequired, 
  alt: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired, 
  id: PropTypes.number.isRequired,
  climateZone: PropTypes.string,
  cycle: PropTypes.string, 
  category: PropTypes.string, 
  shortDescription: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]), // topLeftTagline can be a string or an array of strings
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]), // topLeftTagline can be a string or an array of strings
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ), // buttons array of objects with label and url properties required string
}

