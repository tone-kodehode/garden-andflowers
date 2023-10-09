import PropTypes from 'prop-types';

import BannerStyles from '../../styles/BannerStyles/Banner.module.css'
// mapArray function with two arguments, first argument: paragraphs (array of paragraphs) to render and secend a callback (paragraph, index) as arrow function to applie to each element in the paragraphs array,paragraph parameter placed the content inside the "<p>" element, key (index) attribute is unique identifier of each element in paragraphs array 
import mapArray from '../../utils/mapArray';

// functional component that takes title and paragraphs as props
export const TextBanner = ({ title, paragraphs }) => {

  return (
    <section className={BannerStyles.textSection}>
      <h2 className={BannerStyles.title}>{title}</h2>
      {mapArray(paragraphs, (paragraph, index) => (
        <p key={index} className={BannerStyles.paragraphs}>
          {paragraph}
        </p>
      ))}
    </section>
  )
}

// functional component that takes imageUrl, alt, title, topLeftTagline, ButtonLeft and url as props
export const ImageBanner = ({ imageUrl, alt, title, topLeftTagline, ButtonLeft, url }) => {
  return (
    <section className={BannerStyles.imgSection}>
      <img className={BannerStyles.imageUrl} src={imageUrl} alt={alt} />
      <div className={BannerStyles.topLeftTagline}>{topLeftTagline}</div>
      {/* <Link to="/flowers">
//           <ButtonLeft className={BannerStyles.buttonLeftLabel} />
//         </Link>   */}
    </section>
  );
};

// Define PropTypes for TextBanner component
TextBanner.propTypes = {
  title: PropTypes.string.isRequired, // title is a required string prop
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired, // paragraphs is an array of strings (required)
};

// Define PropTypes for ImageBanner component
ImageBanner.propTypes = {
  imageUrl: PropTypes.string.isRequired, // imageUrl is a required string prop
  alt: PropTypes.string.isRequired, // alt is a required string prop
  title: PropTypes.string.isRequired, // title is a required string prop
  topLeftTagline: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]), // topLeftTagline can be a string or an array of strings
  buttonLeftLabel: PropTypes.string, // ButtonLeft is an optional string prop
  onClick: PropTypes.func, // onClick is an optional function prop for the button click handler
  buttonUrl: PropTypes.string, // url is an optional string prop
};

