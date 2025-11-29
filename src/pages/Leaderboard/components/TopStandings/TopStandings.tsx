import React from 'react'
import { StandCard } from './StandCard/StandCard'
import { AnimatedStandCards } from '../../../../components/AnimatedStandCards'

export const TopStandings: React.FC = () => {
  const standings = [
    { position: 1, username: 'Username', volume: '$ 3,392,102', headcount: '225' },
    { position: 2, username: 'Username', volume: '$ 3,392,102', headcount: '225' },
    { position: 3, username: 'Username', volume: '$ 3,392 102', headcount: '225' },
  ]

  return (
    <AnimatedStandCards
      blurAmount={3}
      borderColor="#7eff29"
      pauseBetweenAnimations={1.5}
    >
      {standings.map((stand) => (
        <StandCard key={stand.position} {...stand} />
      ))}
    </AnimatedStandCards>
  )
}

