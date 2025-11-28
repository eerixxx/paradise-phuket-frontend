import React from 'react'
import Leaderboard from './pages/Leaderboard/Leaderboard'
import Silk from './background/Silk'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Silk
        speed={5}
        scale={1}
        color="#091405"
        noiseIntensity={1.5}
        rotation={0}
      />
      <Leaderboard />
    </div>
  )
}

export default App

