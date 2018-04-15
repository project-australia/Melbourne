import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table, Pagination, Menu, Button, Icon } from 'semantic-ui-react'

import BookView from './BookView'
import BookEdit from './BookEdit'

import './style/UsersContent.css'

class UsersContent extends Component {
  state = {
    boundaryRange: 0,
    siblingRange: 2,
    showEllipsis: true,
    showFirstAndLastNav: true,
    showPreviousAndNextNav: false,
    openModal: false,
    bookViewModal: false,
    bookEditModal: false,
    book: {}
  }

  handlePaginationChange = (e, { activePage }) => {
    console.log('pag books')
    this.props.changePage(activePage)
  }

  toggleModal = (book) => this.setState((state, props) => ({ openModal: !state.openModal, book }))
  toggleBookViewModal = (book) => this.setState((state, props) => ({ bookViewModal: !state.bookViewModal, book }))
  toggleBookEditModal = (book) => this.setState((state, props) => ({ bookEditModal: !state.bookEditModal, book }))

  render () {
    const {
      boundaryRange,
      siblingRange,
      showEllipsis,
      showFirstAndLastNav,
      showPreviousAndNextNav,
      bookViewModal,
      bookEditModal
    } = this.state
    const { books, activePage, totalPages } = this.props.listItems
    return (
      <div className="uc-wrapper">

        <BookView
          openModal={bookViewModal}
          toggleModal={this.toggleBookViewModal}
          item={this.state.book}
        />
        <BookEdit
          openModal={bookEditModal}
          toggleModal={this.toggleBookEditModal}
          updateFunction={this.props.updateItem}
          item={this.state.book}
        />
        <div className="uc-table">
          <Table striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Book Id</Table.HeaderCell>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Price - Buy</Table.HeaderCell>
                <Table.HeaderCell>Price - Rent</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>Featured</Table.HeaderCell>
                <Table.HeaderCell textAlign='right'>Actions</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {books.map(book => {
                return (
                  <Table.Row key={book.id}>
                    <Table.Cell>{book.id}</Table.Cell>
                    <Table.Cell>{book.title}</Table.Cell>
                    <Table.Cell>$ {book.prices.buy || 'not set'}</Table.Cell>
                    <Table.Cell>$ {book.prices.rent || 'not set'}</Table.Cell>
                    <Table.Cell>{book.status}</Table.Cell>
                    <Table.Cell>{book.featured ? 'YES' : 'NO'}</Table.Cell>
                    <Table.Cell>
                      <div className="uc-actions">
                        <Button onClick={() => this.toggleBookEditModal(book)} icon>
                          <Icon name='pencil' />
                        </Button>
                        <Button onClick={() => this.toggleBookViewModal(book)} icon>
                          <Icon name='eye' />
                        </Button>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                )
              })}
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='7'>
                  <Menu floated='right' pagination>
                    <Pagination
                      className="uc-pagination"
                      activePage={activePage}
                      boundaryRange={boundaryRange}
                      onPageChange={this.handlePaginationChange}
                      size='mini'
                      siblingRange={siblingRange}
                      totalPages={totalPages}
                      ellipsisItem={showEllipsis ? undefined : null}
                      firstItem={showFirstAndLastNav ? undefined : null}
                      lastItem={showFirstAndLastNav ? undefined : null}
                      prevItem={showPreviousAndNextNav ? undefined : null}
                      nextItem={showPreviousAndNextNav ? undefined : null}
                    />
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </div>
      </div>
    )
  }
}

UsersContent.propTypess = {
  listItems: PropTypes.array.isRequired,
  updateItem: PropTypes.func.isRequired,
  viewItem: PropTypes.func.isRequired
}

export default UsersContent
