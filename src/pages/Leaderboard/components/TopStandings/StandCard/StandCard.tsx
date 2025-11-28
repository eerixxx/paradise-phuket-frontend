import React from 'react'
import styles from './StandCard.module.css'
import standFirst from '../../../../../assets/e437cfec968a9b2c1fa8159e2ee1ffc6cabb88cc.svg'

interface StandCardProps {
  position: number
  username: string
  volume: string
  headcount: string
}

export const StandCard: React.FC<StandCardProps> = ({ position, username, volume, headcount }) => {
  const isFirst = position === 1
  const isSecond = position === 2
  const isThird = position === 3
  const positionText = position === 1 ? '1st' : position === 2 ? '2nd' : '3rd'

  return (
    <div className={styles.stand}>
      <div className={styles.username}>{username}</div>
      <div className={styles.standBase}>
        <img src={standFirst} alt="" className={styles.standImage} />
        <div className={`${styles.positionText} ${isFirst ? styles.positionTextFirst : ''} ${isSecond ? styles.positionTextSecond : ''} ${isThird ? styles.positionTextThird : ''}`}>
          {positionText}
        </div>
      </div>
      <div className={styles.data}>
        <div className={styles.dataRow}>
          <div className={styles.label}>Volume:</div>
          <div className={styles.value}>{volume}</div>
        </div>
        <div className={styles.dataRow}>
          <div className={styles.label}>Headcount:</div>
          <div className={styles.value}>{headcount}</div>
        </div>
      </div>
    </div>
  )
}

