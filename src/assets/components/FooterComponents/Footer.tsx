import { useState } from 'react'
import Modal from '../Modal/Modal'
import { createPortal } from 'react-dom'

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const modal = document.getElementById('modal')
  if (!modal) return null

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
          {createPortal(
            <Modal
              className={isModalOpen ? 'modal open' : 'modal'}
              onClose={closeModal}
            >
              <h2>Тестовый вариант! Скоро будет нормальная форма!</h2>
            </Modal>,
            modal
          )}
        </div>
      </div>
    </div>
  )
}

export default Footer
