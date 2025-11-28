import React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import styles from './UserMenuModal.module.css'
import exitIcon from '../../../assets/figma_exports/9e191d5f2dd2b7fe0b95df7fe6101c7d0e1d171d.svg'
import arrowIcon from '../../../assets/figma_exports/4b58b9783ea79a0ea2dcc3b99b6a74ccaca0816b.svg'

interface UserMenuModalProps {
  isOpen: boolean
  onClose: () => void
}

export const UserMenuModal: React.FC<UserMenuModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <motion.div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className={styles.header}>
              <h2 className={styles.title}>Connect via Telegram</h2>
              <button className={styles.closeButton} onClick={onClose}>
                <img src={exitIcon} alt="Close" className={styles.closeIcon} />
              </button>
            </div>

            <p className={styles.text}>
              To see your place on the leaderboard, connect your{' '}
              <span className={styles.boldText}>Telegram account</span>.
            </p>

            <p className={styles.text}>
              If you have not yet logged in through our{' '}
              <span className={styles.boldText}>Telegram bot</span>, please use the link below to complete the authorization process.
            </p>

            <div className={styles.buttonGroup}>
              <button className={`${styles.button} ${styles.buttonPrimary}`}>
                <div className={styles.buttonContent}>
                  <span className={styles.buttonText}>CONNECT ACCOUNT</span>
                  <div className={styles.buttonIconWrapper}>
                    <img src={arrowIcon} alt="" className={styles.buttonIcon} />
                  </div>
                </div>
              </button>

              <button className={`${styles.button} ${styles.buttonSecondary}`}>
                <div className={styles.buttonContent}>
                  <span className={styles.buttonText}>BOT</span>
                  <div className={styles.buttonIconWrapper}>
                    <img src={arrowIcon} alt="" className={styles.buttonIcon} />
                  </div>
                </div>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
