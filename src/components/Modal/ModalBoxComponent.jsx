import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import { SearchProduct } from '../Modal/SearchProduct'

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import ModalBoxStyles from '../../styles/ModalStyles/Modal.module.css'



export function ModalBoxComponent({ onClose }) {
  const ref = useRef();

  useClickOutside(ref, onClose)
  

  return (
    <div className={ModalBoxStyles.modal} ref={ref}>
      <div className={ModalBoxStyles.seachProduct}>
        <SearchProduct /> 
    </div>
    <div onClick={onClose} className={ModalBoxStyles.CloseRoundedIcon}>
        <CloseRoundedIcon />
    </div>
  </div>
  )
}

ModalBoxComponent.propTypes = {
  // label: PropTypes.string,
  // content: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  onClose: PropTypes.func,
  className: PropTypes.string,
}


