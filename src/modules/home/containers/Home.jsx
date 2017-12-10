import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import FeaturedBooks from './../components/FeaturedBooks'
import RecentlyAddedBooks from './../components/RecentlyAddedBooks'
import SectionFullWidth from './../../shared/components/grid/SectionFullWidth'
import SectionCentered from './../../shared/components/grid/SectionCentered'
import FullBanner from './../components/FullBanner'

import {
  signOut
} from './../../../redux/actions/auth/actions'

import './../style/home.css'

class Home extends Component {
  render () {
    return (
      <SectionFullWidth>
        <FullBanner />
        <SectionCentered>
          <RecentlyAddedBooks books={[]} />
          <FeaturedBooks books={[]} />
        </SectionCentered>
      </SectionFullWidth>
    )
  }
}

Home.propTypes = {
  logged: PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    logged: state.auth.logged
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
