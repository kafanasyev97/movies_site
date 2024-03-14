type Props = {
  className: any
  onClose: any
  children: any
}

const Modal = ({ className, onClose, children }: Props) => {
  return (
    <div className={className}>
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
