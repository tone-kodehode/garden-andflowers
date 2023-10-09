import PropTypes from 'prop-types';

import ButtonsStyles from '../../styles/ButtonsStyles/Buttons.module.css'

export const Button = ({ label }) => {
  return (
      <button className={ButtonsStyles.button}>{label}</button>
  
  );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    // to: PropTypes.string.isRequired,
    // onClick: PropTypes.string.isRequired
};