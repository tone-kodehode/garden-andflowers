import { PropTypes } from '@mui/material';

import ButtonStyles from '../Button/Button.module.css'
import { Link } from 'react-router-dom';

export const Button = ({ label, to }) => {
  return (
    <Link to={to}>
      <button className={ButtonStyles.ButtonLeft}>
        {label}
      </button>
    </Link>
  );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  };