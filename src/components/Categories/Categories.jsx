// rafc

import { Button } from '../Button/Button'
import mapArray from '../../utils/mapArray'

import CategoriesStyles from '../../styles/CategoriesStyles/Categories.module.css'
export const Categories = ({ imageUrl, alt, title, buttons }) => {
  return (
    <section className={CategoriesStyles.imgContainer}>
      <img className={CategoriesStyles.imageUrl} src={imageUrl} alt={alt} />
      <div className={CategoriesStyles.infoContainer}>
        <h2 className={CategoriesStyles.title}>{title}</h2>
        {buttons && buttons.length > 0 && (
          <div className={CategoriesStyles.buttonContainer}>
            {mapArray(buttons, (button, index) => (
              <Button
                key={index}
                className={CategoriesStyles.button}
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

