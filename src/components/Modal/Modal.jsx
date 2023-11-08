import PropTypes from 'prop-types';

import { createPortal } from "react-dom";
import { useModal } from '../../hooks/useModal';

import { ModalBoxComponent } from './ModalBoxComponent';




export const Modal = ({ label, content }) => {
    const { showModal, openModal, closeModal } = useModal()

    return (
        <>
          <div onClick={openModal}>
            {label}
          </div>
          {showModal && createPortal(
            <ModalBoxComponent 
              onClose={closeModal}
              label={label}
              content={content}
            />,
            document.body
          )}
        </>
    );
}

Modal.propTypes = {
    label: PropTypes.node,
    content: PropTypes.node,
}