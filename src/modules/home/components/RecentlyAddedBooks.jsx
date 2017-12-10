import React from 'react'

import ListBooks from './../../shared/components/ListBooks'

const RecentlyAddedBooks = (props) => {
  return (
    <div>
      <h2>Recentlty Added Books</h2>
      <ListBooks books={[]} />
    </div>
  )
}

export default RecentlyAddedBooks
