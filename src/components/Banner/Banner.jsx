import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';

import BannerStyles from '../../styles/BannerStyles/Banner.module.css'
// mapArray function with two arguments, first argument: paragraphs (array of paragraphs) to render and secend a callback (paragraph, index) as arrow function to applie to each element in the paragraphs array,paragraph parameter placed the content inside the "<p>" element, key (index) attribute is unique identifier of each element in paragraphs array 
import mapArray from '../../utils/mapArray';

// functional component that takes title and paragraphs as props
export const TextBanner = ({ title, paragraphs }) => {

  return (
    <section className={BannerStyles.textContainer}>
      <h2 className={BannerStyles.title}>{title}</h2>
      {mapArray(paragraphs, (paragraph, index) => (
        <p 
          key={index} 
          className={BannerStyles.paragraphs}>
          {paragraph}
        </p>
      ))}
    </section>
  )
}

// functional component that takes imageUrl, alt, title, topLeftTagline, ButtonLeft and url as props
export const ImageBanner = ({ imageUrl, alt, topLeftTagline, buttons }) => {
  const navigate = useNavigate()
  return (
    <section className={BannerStyles.imgContainer}>
      <img className={BannerStyles.imageUrl} src={imageUrl} alt={alt} />
      <div className={BannerStyles.topLeftTagline}>{topLeftTagline}</div>
      {buttons && buttons.length > 0 && (
        <div className={BannerStyles.buttonContainer}>
          {mapArray(buttons, (button, index) => (
            <Button
              key={index}
              label={button.label}
              onClick={() => navigate(button.url)}
              className={BannerStyles.button}
            />
          ))}
        </div>
      )}
    </section>
  )
}

// Define PropTypes for TextBanner component
TextBanner.propTypes = {
  title: PropTypes.string.isRequired, // title is a required string prop
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired, // paragraphs is an array of strings (required)
};

// Define PropTypes for ImageBanner component
ImageBanner.propTypes = {
  imageUrl: PropTypes.string.isRequired, // imageUrl is a required string prop
  alt: PropTypes.string.isRequired, // alt is a required string prop
  title: PropTypes.string, // title is a string prop
  topLeftTagline: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]), // topLeftTagline can be a string or an array of strings
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ), // buttons array of objects with label and url properties required string
}

