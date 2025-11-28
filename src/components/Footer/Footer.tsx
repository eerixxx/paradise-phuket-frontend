import React, { useState } from 'react'
import { SupportModal } from './modals/SupportModal'
import { TermsModal } from './modals/TermsModal'
import styles from './Footer.module.css'
import telegramIcon from '../../assets/telegram-icon.svg'

export const Footer: React.FC = () => {
  const [isSupportOpen, setIsSupportOpen] = useState(false)
  const [isTermsOpen, setIsTermsOpen] = useState(false)

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.leftSection}>
            <div className={styles.copyright}>© 2025-2026 Paradise Phuket</div>
            <button 
              className={styles.link}
              onClick={() => setIsSupportOpen(true)}
            >
              Support Team
            </button>
            <button 
              className={styles.link}
              onClick={() => setIsTermsOpen(true)}
            >
              Terms of Use
            </button>
          </div>
          <div className={styles.rightSection}>
            <a href="https://t.me/paradisephuket" target="_blank" rel="noopener noreferrer" className={styles.iconWrapper}>
              <img src={telegramIcon} alt="Telegram" className={styles.icon} />
            </a>
          </div>
        </div>
      </footer>

      <SupportModal 
        isOpen={isSupportOpen} 
        onClose={() => setIsSupportOpen(false)} 
      />
      <TermsModal 
        isOpen={isTermsOpen} 
        onClose={() => setIsTermsOpen(false)} 
      />
    </>
  )
}

