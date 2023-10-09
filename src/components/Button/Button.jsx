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

