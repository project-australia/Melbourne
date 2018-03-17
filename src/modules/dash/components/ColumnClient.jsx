import React from 'react'
import { CardClient } from './CardClient'

const items = [
  {
    id: 1,
    header: 'Project Report - April',
    description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: 'ROI: 30%'
  },
  {
    id: 2,
    header: 'Project Report - May',
    description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%'
  },
  {
    id: 3,
    header: 'Project Report - June',
    description: 'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
    meta: 'ROI: 27%'
  }
]

export const ColumnClient = props => {
  return (
    <div className='pd-column-1'>
      <h1>Column 1 - Client</h1>
      {items.map(item => (
        <CardClient key={item.id} item={item} />
      ))}
    </div>
  )
}
