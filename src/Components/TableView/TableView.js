import React, { Component } from 'react';
import { connect } from 'react-redux';

import SegmentComponent from '../Segment/Segment';
import TableComponent from '../Table/Table';

class TableView extends Component {
  componentDidUpdate() {
    console.log('state', this.props.transactions)
  }
  render() {
    const { transactions } = this.props;
    const tableData = Object.keys(transactions).map((coin) => {
      return <TableComponent key={coin} coin={coin} trans={transactions[coin]}/>
    });
    
    return (
      <SegmentComponent>
        { 
        tableData.length 
          ? tableData
          : 'You currently have no transactions.'
        }
      </SegmentComponent>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    transactions: state.handleTransaction,
  };
}

export default connect(mapStateToProps)(TableView);