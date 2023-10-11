import { useState } from "react";
import PropTypes from 'prop-types';


import ShowHideButtonStyles from '../../styles/ButtonsStyles/ShowHideButton.module.css'

export const ShowHideButton = ({content}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button className={ShowHideButtonStyles.ShowHideButton} onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide content' : 'Show more'}
      </button>
      {isVisible && (
        <div>
          {content}
        </div>
      )}
    </div>
  );
}

ShowHideButton.propTypes = {
    content: PropTypes.string.isRequired,
    // to: PropTypes.string.isRequired,
    // onClick: PropTypes.string.isRequired
  };