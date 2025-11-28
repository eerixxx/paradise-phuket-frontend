import React from 'react'
import { StandCard } from './StandCard/StandCard'
import styles from './TopStandings.module.css'

export const TopStandings: React.FC = () => {
  const standings = [
    { position: 1, username: 'Username', volume: '$ 3,392,102', headcount: '225' },
    { position: 2, username: 'Username', volume: '$ 3,392,102', headcount: '225' },
    { position: 3, username: 'Username', volume: '$ 3,392 102', headcount: '225' },
  ]

  return (
    <div className={styles.topStandings}>
      {standings.map((stand) => (
        <StandCard key={stand.position} {...stand} />
      ))}
    </div>
  )
}

