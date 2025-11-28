import React, { useRef } from 'react'
import styles from './HeroSection.module.css'
import arrowIcon from '../../../../assets/arrow-diagonal.svg'
import BlurText from '../../../../components/BlurText/BlurText'
import VariableProximity from '../../../../components/VariableProximity/VariableProximity'

interface HeroSectionProps {
  onOpenTelegramModal: () => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTelegramModal }) => {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.heroSection} ref={containerRef}>
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
            <span> </span>
            <VariableProximity
              label="and earn your spot in the ultimate strength community"
              className={styles.variableProximityText}
              fromFontVariationSettings="'wght' 500"
              toFontVariationSettings="'wght' 700"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
            />
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

