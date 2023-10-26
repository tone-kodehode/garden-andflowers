import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';


export const Modal = ({isOpen, onClose, children}) => {
  if (!isOpen) return null
  return createPortal(
    <div className="modal">
      <button onClick={onClose}>{children}</button>
      {children}
    </div>,
    document.body
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node // any valid React node

};



