import React from 'react';
import { Table } from 'semantic-ui-react';

import TableRowComponent from './TableRow';

const TableComponent = (props) => {
  return (
    <Table compact>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell width={1}>Date</Table.HeaderCell>
          <Table.HeaderCell width={1}>Cost</Table.HeaderCell>
          <Table.HeaderCell width={1}>Quantity</Table.HeaderCell>
          <Table.HeaderCell width={1}>Avg $</Table.HeaderCell>
          <Table.HeaderCell width={1}>Profit</Table.HeaderCell>
          <Table.HeaderCell width={1}>%</Table.HeaderCell>
          <Table.HeaderCell width={1}>{' '}</Table.HeaderCell>
          <Table.HeaderCell width={1}>{' '}</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <TableRowComponent />
      </Table.Body>
    </Table>
  )
}



export default TableComponent;