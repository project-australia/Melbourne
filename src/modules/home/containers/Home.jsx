import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  fetchUser,
} from './../../../redux/actions/user/actions'

class Home extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <div>
        home {this.props.info} - {this.props.user.name}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    info: state.user.info,
    user: state.user.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
