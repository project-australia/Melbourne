import React from 'react'

import ListBooks from './../../shared/components/ListBooks'

const FeaturedBooks = (props) => {
  return (
    <div>
      <h2>Featured Books</h2>
      <ListBooks books={[]} />
    </div>
  )
}

export default FeaturedBooks
