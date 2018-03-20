import React, { Component } from 'react'
import { Table, Pagination, Menu } from 'semantic-ui-react'

import './style/UsersContent.css'

class UsersContent extends Component {
  render () {
    return (
      <div className="uc-wrapper">
        <div className="uc-table">
          <Table striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>E-mail</Table.HeaderCell>
                <Table.HeaderCell>Telephone</Table.HeaderCell>
                <Table.HeaderCell>Club</Table.HeaderCell>
                <Table.HeaderCell>Called</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>John Lilki</Table.Cell>
                <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                <Table.Cell>202-555-0143</Table.Cell>
                <Table.Cell>None</Table.Cell>
                <Table.Cell>No</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>John Lilki</Table.Cell>
                <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                <Table.Cell>202-555-0143</Table.Cell>
                <Table.Cell>None</Table.Cell>
                <Table.Cell>No</Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='5'>
                  <Menu floated='right' pagination>
                    <Pagination defaultActivePage={5} totalPages={10} />
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

export default UsersContent
