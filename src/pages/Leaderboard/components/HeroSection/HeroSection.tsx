import React from 'react'
import styles from './HeroSection.module.css'
import arrowIcon from '../../../../assets/arrow-diagonal.svg'
import BlurText from '../../../../components/BlurText/BlurText'

interface HeroSectionProps {
  onOpenTelegramModal: () => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTelegramModal }) => {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <div className={styles.heroSection}>
      <div className={styles.content}>
        <div className={styles.titleSection}>
          <div className={styles.titleRow}>
            <BlurText
              text="Paradise 2026"
              delay={300}
              stepDuration={0.8}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className={styles.gradientTitle}
            />
            <BlurText
              text="Global Leaderboard"
              delay={300}
              stepDuration={0.8}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className={styles.blurredTitle}
            />
          </div>
          <div className={styles.subtitle}>
            <span>Race to win a ticket to </span>
            <span className={styles.boldText}>Phuket 2026</span>
            <span> and earn your spot in the ultimate strength community</span>
          </div>
        </div>
        <button 
          className={styles.telegramButton}
          onClick={onOpenTelegramModal}
        >
          <div className={styles.buttonContent}>
            <div className={styles.iconWrapper}>
              <img src={arrowIcon} alt="" className={styles.icon} />
            </div>
            <div className={styles.buttonText}>TELEGRAM BOT</div>
          </div>
        </button>
      </div>
    </div>
  )
}

