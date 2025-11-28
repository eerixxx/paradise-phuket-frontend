import React from 'react'
import styles from './QuestionsModal.module.css'

interface QuestionsModalProps {
  isOpen: boolean
  onClose: () => void
}

export const QuestionsModal: React.FC<QuestionsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalContent}>
          <h2 className={styles.title}>Questions</h2>
          <p className={styles.description}>
            This modal will be implemented later.
          </p>
          <button className={styles.closeButton} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

