import React from 'react'
import styles from './TableHeader.module.css'

export const TableHeader: React.FC = () => {
  return (
    <div className={styles.headerLine}>
      <div className={`${styles.cell} ${styles.rankCol}`}>
        <div className={styles.cellText}>#</div>
      </div>
      <div className={`${styles.cell} ${styles.usernameCol}`}>
        <div className={styles.cellText}>Username</div>
      </div>
      <div className={`${styles.cell} ${styles.headcountCol}`}>
        <div className={styles.cellText}>Headcount</div>
      </div>
      <div className={`${styles.cell} ${styles.volumeBoostyFiCol}`}>
        <div className={styles.cellText}>Volume: BoostyFi</div>
      </div>
      <div className={`${styles.cell} ${styles.volumeLimitlessCol}`}>
        <div className={styles.cellText}>Volume: Limitless</div>
      </div>
      <div className={`${styles.cell} ${styles.totalVolumeCol}`}>
        <div className={styles.cellText}>Total Volume</div>
      </div>
    </div>
  )
}

