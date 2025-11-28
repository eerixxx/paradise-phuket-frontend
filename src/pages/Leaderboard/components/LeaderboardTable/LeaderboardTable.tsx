import React from 'react'
import { TableHeader } from './TableHeader/TableHeader'
import { TableRow } from './TableRow/TableRow'
import AnimatedList from '../../../../components/AnimatedList/AnimatedList'
import styles from './LeaderboardTable.module.css'

export const LeaderboardTable: React.FC = () => {
  const tableData = [
    { rank: 1, username: 'Username', headcount: '399131', volumeBoostyFi: '$ 29,028', volumeLimitless: '$ 29,028', totalVolume: '$58,056' },
    { rank: 1, username: 'Username', headcount: '399131', volumeBoostyFi: '$ 29,028', volumeLimitless: '$ 29,028', totalVolume: '$58,056' },
    { rank: 1, username: 'Username', headcount: '399131', volumeBoostyFi: '$ 29,028', volumeLimitless: '$ 29,028', totalVolume: '$58,056' },
    { rank: 1, username: 'Username', headcount: '399131', volumeBoostyFi: '$ 29,028', volumeLimitless: '$ 29,028', totalVolume: '$58,056' },
    { rank: 1, username: 'Username', headcount: '399131', volumeBoostyFi: '$ 29,028', volumeLimitless: '$ 29,028', totalVolume: '$58,056' },
    { rank: 1, username: 'Username', headcount: '399131', volumeBoostyFi: '$ 29,028', volumeLimitless: '$ 29,028', totalVolume: '$58,056' },
    { rank: 1, username: 'Username', headcount: '399131', volumeBoostyFi: '$ 29,028', volumeLimitless: '$ 29,028', totalVolume: '$58,056' },
    { rank: 1, username: 'Username', headcount: '399131', volumeBoostyFi: '$ 29,028', volumeLimitless: '$ 29,028', totalVolume: '$58,056' },
    { rank: 1, username: 'Username', headcount: '399131', volumeBoostyFi: '$ 29,028', volumeLimitless: '$ 29,028', totalVolume: '$58,056' },
    { rank: 1, username: 'Username', headcount: '399131', volumeBoostyFi: '$ 29,028', volumeLimitless: '$ 29,028', totalVolume: '$58,056' },
  ]

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

