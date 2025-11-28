import React from 'react'
import styles from './SupportModal.module.css'

interface SupportModalProps {
  isOpen: boolean
  onClose: () => void
}

export const SupportModal: React.FC<SupportModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalContent}>
          <h2 className={styles.title}>Support Team</h2>
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

