import React from 'react';
import { Table, Header } from 'semantic-ui-react';

import TableRowComponent from './TableRow';
import FooterComponent from './Footer';

const TableComponent = (props) => {
  const { coin, trans } = props;
  return (
    <div>
    <Header as='h3' dividing>
      {coin}
    </Header>
    <Table compact>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell width={1}>{' '}</Table.HeaderCell>
          <Table.HeaderCell width={1}>Date</Table.HeaderCell>
          <Table.HeaderCell width={1}>Cost</Table.HeaderCell>
          <Table.HeaderCell width={1}>Quantity</Table.HeaderCell>
          <Table.HeaderCell width={1}>Avg $</Table.HeaderCell>
          <Table.HeaderCell width={1}>Profit</Table.HeaderCell>
          <Table.HeaderCell width={1}>%</Table.HeaderCell>
          {/* <Table.HeaderCell width={1}>{' '}</Table.HeaderCell> */}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {
          trans.map((tran) => {
            return <TableRowComponent key={tran.id} tran={tran}/>
          })
        }
      </Table.Body>
      <FooterComponent coin={coin}/>
    </Table>
    </div>
  )
}

export default TableComponent;