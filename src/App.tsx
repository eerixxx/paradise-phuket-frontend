import Leaderboard from './pages/Leaderboard/Leaderboard'
import Plasma from './background/Plasma'
import Vignette from './background/Vignette'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Plasma
        color="#1c3d10"
        speed={0.6}
        direction="forward"
        scale={1.1}
        opacity={0.8}
        mouseInteractive={true}
      />
      <Vignette
        horizontal={1}
        vertical={1}
        blur={0}
        intensity={1}
        color="rgba(0, 0, 0, 1)"
      />
      <Leaderboard />
    </div>
  )
}

export default App

