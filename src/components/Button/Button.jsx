import PropTypes from 'prop-types';

import ButtonsStyles from '../../styles/ButtonsStyles/Buttons.module.css'
import { useNavigate } from 'react-router-dom';




export const Button = ({ label, onClick }) => {
  return (
      <button className={ButtonsStyles.button} onClick={onClick}>{label}</button>
  
  )
}

export const GreenButton = ({ label, onClick }) => {
  return (
      <button className={ButtonsStyles.greenButton} onClick={onClick}>{label}</button>
  
  )
}

// type filled
export const GreyTint3Button = ({ label, onClick }) => {
  return (
      <button className={ButtonsStyles.GreyTint3Button} onClick={onClick}>{label}</button>
  
  )
}


// submit
export const BlueButton = ({ label, onClick }) => {
  return (
      <button className={ButtonsStyles.blueButton} onClick={onClick}>{label}</button>
  
  )
}



export const GoBackButton = () => {
  const navigate = useNavigate()
  const handleClick = () => navigate(-1)

  return (
    <button type='goBackButton' onClick={handleClick}>
      Go Back 
    </button>
  )
}

export const GoForwardButton = () => {
  const navigate = useNavigate()
  const handleClick = () => navigate(1)

  return (
    <button type='goBackButton' onClick={handleClick}>
      Go Forward 
    </button>
  )
}




Button.propTypes = {
    label: PropTypes.node.isRequired,
    to: PropTypes.string,
    onClick: PropTypes.func,
    // className: PropTypes.string,
}

GreenButton.propTypes = {
  label: PropTypes.node.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
  // onClick: PropTypes.string.isRequired
  // className: PropTypes.string,
}

BlueButton.propTypes = {
  label: PropTypes.node.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
  // onClick: PropTypes.string.isRequired
  // className: PropTypes.string,
}

GreyTint3Button.propTypes = {
  label: PropTypes.node.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
  // onClick: PropTypes.string.isRequired
  // className: PropTypes.string,
}




