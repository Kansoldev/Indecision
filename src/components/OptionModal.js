import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal isOpen={!!props.choose} contentLabel="Here is the Option" ariaHideApp={false}>
    <p>{props.choose}</p>
    <button onClick={props.removeModal}>Cancel</button>
  </Modal>
)

export default OptionModal;
