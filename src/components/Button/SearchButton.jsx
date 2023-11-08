//import PropTypes from 'prop-types';

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { ModalBoxComponent } from '../Modal/ModalBoxComponent';
import { createPortal } from 'react-dom';
import { useModal } from '../../hooks/useModal';




export const SearchButton = () => {
  const {showModal, openModal, closeModal} = useModal()
  

  

    return (
      <div >
          <SearchRoundedIcon 
            onClick={openModal}
            sx={{ fontSize: 30 }}
            color="action"
          />
    
          {showModal && createPortal (
            <ModalBoxComponent 
              onClose={closeModal}
            
              // label={label}
              // content={content}
            />,
            document.body
          )}
        </div>
    )
}

// SearchButton.propTypes = {
//   label: PropTypes.node,
//   content: PropTypes.node,
// } 







