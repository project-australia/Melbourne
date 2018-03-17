import React from 'react'

export const CardClient = props => {
  const { item } = props
  return (
    <div>
      {item.description}
    </div>
  )
}
