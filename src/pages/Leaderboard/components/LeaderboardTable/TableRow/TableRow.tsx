import React from 'react'
import styles from './TableRow.module.css'

interface TableRowProps {
  rank: number
  username: string
  headcount: string
  volumeBoostyFi: string
  volumeLimitless: string
  totalVolume: string
}

export const TableRow: React.FC<TableRowProps> = ({
  rank,
  username,
  headcount,
  volumeBoostyFi,
  volumeLimitless,
  totalVolume,
}) => {
  return (
    <div className={styles.row}>
      <div className={styles.rowContent}>
        <div className={`${styles.cell} ${styles.rankCol}`}>
          <div className={styles.cellText}>{rank}</div>
        </div>
        <div className={`${styles.cell} ${styles.usernameCol}`}>
          <div className={styles.cellText}>{username}</div>
        </div>
        <div className={`${styles.cell} ${styles.headcountCol}`}>
          <div className={styles.cellText}>{headcount}</div>
        </div>
        <div className={`${styles.cell} ${styles.volumeBoostyFiCol}`}>
          <div className={styles.cellText}>{volumeBoostyFi}</div>
        </div>
        <div className={`${styles.cell} ${styles.volumeLimitlessCol}`}>
          <div className={styles.cellText}>{volumeLimitless}</div>
        </div>
        <div className={`${styles.cell} ${styles.totalVolumeCol}`}>
          <div className={styles.cellTextGradient}>{totalVolume}</div>
        </div>
      </div>
    </div>
  )
}

