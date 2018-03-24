import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getAllOrders, updateUser, findUserById, searchOrders } from './../../../services/backend/Orderservice'

import SectionCentered from './../../shared/components/grid/SectionCentered'
import CommonHeader from './../components/CommonHeader'
import OrdersFilter from './../components/OrdersFilter'
import OrdersContent from '../components/OrdersContent'

class Orders extends Component {
  state = {
    itemList: []
  }

  componentDidMount () {
    this.getAllItems()
  }

  searchOrders = async searchParam => {
    const itemList = await searchOrders(searchParam)
    this.setState({ itemList })
  }

  getAllItems = async () => {
    const Orders = await getAllOrders()
    this.setState({ itemList: Orders })
  }

  updateItem = async item => {
    await updateUser(item)
    this.getAllItems()
  }

  render () {
    const { itemList } = this.state
    return (
      <SectionCentered>
        <CommonHeader
          iconName="user"
          title="Orders"
        />
        <OrdersFilter
          searchFunction={this.searchOrders}
        />
        <OrdersContent
          listItems={itemList}
          updateItem={this.updateItem}
          viewItem={findUserById}
        />
      </SectionCentered>
    )
  }
}

Orders.propTypes = {
  logged: PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    logged: state.auth.logged
  }
}

export default connect(mapStateToProps)(Orders)
