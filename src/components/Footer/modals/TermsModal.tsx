import React from 'react'
import styles from './TermsModal.module.css'

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalContent}>
          <h2 className={styles.title}>Terms of Use</h2>
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

