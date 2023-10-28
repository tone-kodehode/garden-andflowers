import PropTypes from 'prop-types';

import { createPortal } from "react-dom";
import { useModal } from '../../hooks/useModal';

import { ModalBoxComponent } from "./ModalBoxComponent";




export const ModalBox = ({ label, content }) => {
    const { showModal, openModal, closeModal } = useModal();

    return (
        <>
          <button onClick={openModal}>
            {label}
          </button>
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

ModalBox.propTypes = {
    label: PropTypes.node,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
}