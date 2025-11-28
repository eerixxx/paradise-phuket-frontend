import React, { useState } from 'react'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { HeroSection } from './components/HeroSection/HeroSection'
import { TopStandings } from './components/TopStandings/TopStandings'
import { LeaderboardTable } from './components/LeaderboardTable/LeaderboardTable'
import { UserMenuModal } from '../../components/Header/modals/UserMenuModal'
import styles from './Leaderboard.module.css'

const Leaderboard: React.FC = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)

  return (
    <div className={styles.pageWrapper}>
      <Header onOpenUserMenu={() => setIsUserMenuOpen(true)} />
      <div className={styles.leaderboardContent}>
        <HeroSection onOpenTelegramModal={() => setIsUserMenuOpen(true)} />
        <TopStandings />
        <LeaderboardTable />
      </div>
      <Footer />
      <UserMenuModal 
        isOpen={isUserMenuOpen} 
        onClose={() => setIsUserMenuOpen(false)} 
      />
    </div>
  )
}

export default Leaderboard

