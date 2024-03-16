type Props = {
  onClose: any
  children: any
}

const Modal = ({ onClose, children }: Props) => {
  return (
    <div className="modal">
      <div className="modal__box">
        <img
          onClick={onClose}
          className="modal__img-close"
          src="/images/close-modal.svg"
          alt="close"
        />
        {children}
      </div>
    </div>
  )
}

export default Modal
