import PropTypes from 'prop-types';

import { useState } from "react"
import { Modal } from './Modal'

export default function ModalComponent({children}) {
    const [open, setOpen] = useState(false)
    return (
      <div className="container">
        <button onClick={() => setOpen(true)}>{children}</button>
        <Modal isOpen={open} onClose={() => setOpen(false)}>
          {children}
        </Modal>
      </div>
    )
}

ModalComponent.propTypes = {
  children: PropTypes.node // any valid React node

};





