
import PropTypes from 'prop-types';

import "../../styles/ModalStyles/ModalBox.css"
export const ModalBoxComponent = ({onClose, label, content}) => {

    return (
        <div className="modal">
          <div>{content}</div>
          <button onClick={onClose}>{label}</button>
        </div>
      )

}

ModalBoxComponent.propTypes = {
    label: PropTypes.string,
    content: PropTypes.string,
    onClose: PropTypes.func,
    className: PropTypes.string,
}

