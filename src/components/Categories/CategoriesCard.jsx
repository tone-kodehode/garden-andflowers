// rafc
import PropTypes from 'prop-types'

import { Button } from '../Button/Button'
import mapArray from '../../utils/mapArray'

import CategoriesCardStyles from '../../styles/CategoriesStyles/CategoriesCard.module.css'
export const CategoriesCard = ({ imageUrl, alt, title, buttons }) => {
  return (
    <section className={CategoriesCardStyles.cardContainer}>
      <img className={CategoriesCardStyles.imageUrl} src={imageUrl} alt={alt} />
      <div className={CategoriesCardStyles.infoContainer}>
        <h2 className={CategoriesCardStyles.title}>{title}</h2>
        {buttons && buttons.length > 0 && (
          <div className={CategoriesCardStyles.buttonContainer}>
            {mapArray(buttons, (button, index) => (
              <Button
                key={index}
                className={CategoriesCardStyles.button}
                onClick={() => window.location.href = button.url} 
              >
                {button.label}
              </Button>
            ))}
          </div>
        )}    
      </div>
    </section>
  )
}

CategoriesCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};