import React, { useMemo } from 'react'
import { TableHeader } from './TableHeader/TableHeader'
import { TableRow } from './TableRow/TableRow'
import AnimatedList from '../../../../components/AnimatedList/AnimatedList'
import styles from './LeaderboardTable.module.css'

// Генерация случайных имен пользователей
const generateUsername = (index: number): string => {
  const prefixes = ['User', 'Trader', 'Crypto', 'DeFi', 'NFT', 'Web3', 'Blockchain', 'CryptoKing', 'DeFiMaster', 'NFTGuru']
  const suffixes = ['123', 'Pro', 'Elite', 'Max', 'Prime', 'Alpha', 'Beta', 'Gamma', 'Delta', 'Omega']
  const prefix = prefixes[index % prefixes.length]
  const suffix = suffixes[Math.floor(index / prefixes.length) % suffixes.length]
  const num = index + 1
  return `${prefix}${suffix}${num.toString().padStart(2, '0')}`
}

// Форматирование числа с запятыми
const formatNumber = (num: number): string => {
  return num.toLocaleString('en-US')
}

// Генерация случайной суммы с учетом ранга (чем выше ранг, тем больше сумма)
const generateVolume = (rank: number, min: number, max: number): string => {
  // Уменьшаем сумму для более низких рангов
  const rankMultiplier = 1 - (rank - 1) * 0.01 // Уменьшение на 1% за каждый ранг
  const adjustedMax = Math.floor(max * Math.max(rankMultiplier, 0.3)) // Минимум 30% от максимума
  const adjustedMin = Math.floor(min * Math.max(rankMultiplier, 0.3))
  const amount = Math.floor(Math.random() * (adjustedMax - adjustedMin + 1)) + adjustedMin
  return `$ ${formatNumber(amount)}`
}

export const LeaderboardTable: React.FC = () => {
  const tableData = useMemo(() => {
    const data = []
    for (let i = 0; i < 100; i++) {
      const rank = i + 1
      const username = generateUsername(i)
      // Headcount уменьшается с ростом ранга
      const headcountBase = 500000 - (rank - 1) * 4000
      const headcount = formatNumber(Math.max(headcountBase + Math.floor(Math.random() * 10000) - 5000, 50000))
      
      const volumeBoostyFi = generateVolume(rank, 10000, 50000)
      const volumeLimitless = generateVolume(rank, 10000, 50000)
      
      const boostyFiNum = parseInt(volumeBoostyFi.replace(/[^0-9]/g, ''))
      const limitlessNum = parseInt(volumeLimitless.replace(/[^0-9]/g, ''))
      const totalVolume = `$${formatNumber(boostyFiNum + limitlessNum)}`

      data.push({
        rank,
        username,
        headcount,
        volumeBoostyFi,
        volumeLimitless,
        totalVolume,
      })
    }
    return data
  }, [])

  return (
    <div className={styles.tableContainer}>
      <TableHeader />
      <AnimatedList
        className={styles.animatedList}
        itemClassName={styles.animatedListItem}
        showGradients={false}
        enableArrowNavigation={true}
        displayScrollbar={true}
        itemDelay={0.05}
      >
        {tableData.map((row, index) => (
          <TableRow key={index} {...row} />
        ))}
      </AnimatedList>
    </div>
  )
}

