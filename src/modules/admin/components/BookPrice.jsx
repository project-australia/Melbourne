import React from 'react'
import PropTypes from 'prop-types'

const BoookPrice = props => {
  return (
    <div>
      buy: ${props.price.buy}<br />
      rent: ${props.price.rent}
    </div>
  )
}

BoookPrice.propTypes = {
  price: PropTypes.object.isRequired
}

export default BoookPrice
