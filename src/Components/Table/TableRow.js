import React from 'react';
import { Table } from 'semantic-ui-react';
import { connect } from 'react-redux';

const TableRow = ({tran}) => {
  return (
    <Table.Row>
      <Table.Cell>Delete</Table.Cell>
      <Table.Cell>{tran.dateAcquired}</Table.Cell>
      <Table.Cell>{tran.costBasis}</Table.Cell>
      <Table.Cell>{tran.quantity}</Table.Cell>
      <Table.Cell>Calc Avg</Table.Cell>
      <Table.Cell>Calc Profit</Table.Cell>
      <Table.Cell>Calc Profit%</Table.Cell>
    </Table.Row>
  )
}

export default TableRow;