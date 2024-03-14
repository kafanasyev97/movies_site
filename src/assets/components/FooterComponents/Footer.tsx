import { useState } from 'react'
import Modal from '../Modal/Modal'

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="footer">
      <div className="container">
        <div className="footer__container">
          <p className="footer__text">Есть пожелания? Напиши нам</p>
          <button onClick={openModal} className="footer__button">
            Написать
          </button>
          <Modal
            className={isModalOpen ? 'modal open' : 'modal'}
            onClose={closeModal}
          >
            <h2>Шутка! Иди отсюда!</h2>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Footer
