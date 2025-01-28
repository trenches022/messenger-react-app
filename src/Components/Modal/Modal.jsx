import './Modal.css';

const Modal = ({ onConfirm, onCancel }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Are you sure you want to log out?</h3>
        <button onClick={onConfirm} className='logout-btn'>Logout</button>
        <button onClick={onCancel} className='cancel-btn'>Cancel</button>
      </div>

    </div>
  )
}

export default Modal;