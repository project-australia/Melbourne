import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { TextField } from 'material-ui'

import SectionFullWidth from './../../shared/components/grid/SectionFullWidth'
import SectionCentered from './../../shared/components/grid/SectionCentered'

import {
  signOut
} from './../../../redux/actions/auth/actions'

import './../style/home.css'

import img from './../../../assets/img/bg-home.jpg'
import img2 from './../../../assets/img/layer-1.png'

class Home extends Component {
  state = {
    search: ''
  }

  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = () => {
    const { search } = this.state
    console.log('submit', search)
  }

  render () {
    const { search } = this.state
    return (
      <div>
        <SectionFullWidth>
          <div className='home-section-1'>
            <img className='img-library' src={img} alt='banner-full'/>
            <div className='layer-img'>
              <img className='img-man' src={img2} alt='' />
            </div>
            <div className='search-isbn'>
              <TextField
                hintText='Search for books / ISBN / author / title'
                type='email'
                name='email'
                fullWidth
                value={search}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </SectionFullWidth>
        <SectionCentered>
          <h1>featured</h1>
        </SectionCentered>
      </div>
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
