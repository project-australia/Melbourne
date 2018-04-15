import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getAllBooks, findBookById, updateBook, searchBooks } from './../../../services/backend/bookService'

import SectionCentered from './../../shared/components/grid/SectionCentered'
import CommonHeader from './../components/CommonHeader'
import BooksFilter from './../components/BooksFilter'
import BooksContent from '../components/BooksContent'

class Books extends Component {
  state = {
    itemList: {
      books: [],
      activePage: 0,
      totalPages: 0
    }
  }

  componentDidMount () {
    this.getAllItems()
  }

  searchItems = async searchParam => {
    if (searchParam) {
      const itemList = await searchBooks(searchParam)
      this.setState({ itemList })
    } else {
      this.getAllItems()
    }
  }

  getAllItems = async (activePage) => {
    const itemList = await getAllBooks(activePage)
    this.setState({ itemList })
  }

  updateItem = async item => {
    await updateBook(item)
    this.getAllItems()
  }

  render () {
    const { itemList } = this.state
    return (
      <SectionCentered>
        <CommonHeader
          iconName="book"
          title="Books"
        />
        <BooksFilter
          searchFunction={this.searchItems}
        />
        <BooksContent
          listItems={itemList}
          updateItem={this.updateItem}
          viewItem={findBookById}
          changePage={this.getAllItems}
        />
      </SectionCentered>
    )
  }
}

Books.propTypes = {
  logged: PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    logged: state.auth.logged
  }
}

export default connect(mapStateToProps)(Books)
