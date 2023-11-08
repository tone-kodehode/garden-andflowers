import { useState } from "react";
import PropTypes from 'prop-types';


import ShowHideButtonStyles from '../../styles/ButtonsStyles/ShowHideButton.module.css'

export const ShowHideButton = ({content}) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div>
      <div className={ShowHideButtonStyles.ShowHide} onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide content' : 'Description...'}
      </div>
      {isVisible && (
        <div>
          {content}
        </div>
      )}
    </div>
  )
}

ShowHideButton.propTypes = {
  content: PropTypes.node,
}