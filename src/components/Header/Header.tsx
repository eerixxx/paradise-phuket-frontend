import React, { useState, useEffect } from 'react'
import { ExploreUsModal } from './modals/ExploreUsModal'
import { QuestionsModal } from './modals/QuestionsModal'
import styles from './Header.module.css'
import chevronDownIcon from '../../assets/chevron-down.svg'

interface HeaderProps {
  onOpenUserMenu: () => void
}

export const Header: React.FC<HeaderProps> = ({ onOpenUserMenu }) => {
  const [isExploreUsOpen, setIsExploreUsOpen] = useState(false)
  const [isQuestionsOpen, setIsQuestionsOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState<'EN' | 'JP'>('EN')
  const [isMobile, setIsMobile] = useState(false)

  const languages = [
    { code: 'EN', label: '🇬🇧 EN' },
    { code: 'JP', label: '🇯🇵 JP' }
  ]

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <>
      <header className={styles.header}>
        <div className={styles.ellipse}></div>
        <div className={styles.headerContent}>
          <nav className={styles.menu}>
            <div className={styles.mainMenuItem}>
              <div className={styles.gradientText}>
                <p className={styles.textContent}>
                  {isMobile ? 'Paradise' : 'Paradise 2026 | Phuket'}
                </p>
              </div>
            </div>
            <button 
              className={styles.menuItem}
              onClick={() => setIsExploreUsOpen(true)}
            >
              <div className={styles.menuItemText}>
                <p>Explore Us</p>
              </div>
            </button>
            <button 
              className={styles.menuItem}
              onClick={() => setIsQuestionsOpen(true)}
            >
              <div className={styles.menuItemText}>
                <p>Questions</p>
              </div>
            </button>
            <div className={styles.langContainer}>
              <button 
                className={styles.menuItem}
                onClick={() => setIsLangOpen(!isLangOpen)}
              >
                <div className={styles.menuItemText}>
                  <p>{languages.find(l => l.code === currentLang)?.label}</p>
                </div>
              </button>
              
              {isLangOpen && (
                <div className={styles.langDropdown}>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`${styles.langOption} ${currentLang === lang.code ? styles.activeLang : ''}`}
                      onClick={() => {
                        setCurrentLang(lang.code as 'EN' | 'JP')
                        setIsLangOpen(false)
                      }}
                    >
                      <p>{lang.label}</p>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>
          <button 
            className={styles.userButton}
            onClick={onOpenUserMenu}
          >
            <div className={styles.userButtonContent}>
              <div className={styles.username}>
                <p>username</p>
              </div>
              <div className={styles.iconWrapper}>
                <img src={chevronDownIcon} alt="" className={styles.icon} />
              </div>
            </div>
          </button>
        </div>
      </header>

      <ExploreUsModal 
        isOpen={isExploreUsOpen} 
        onClose={() => setIsExploreUsOpen(false)} 
      />
      <QuestionsModal 
        isOpen={isQuestionsOpen} 
        onClose={() => setIsQuestionsOpen(false)} 
      />
    </>
  )
}

