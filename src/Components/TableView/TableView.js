import React, { Component } from 'react';

import SegmentComponent from '../Segment/Segment';
import TableComponent from '../Table/Table';

class TableView extends Component {

  render() {
    return (
      <SegmentComponent>
        {/* You currently have no transactions. */}
        <TableComponent />
      </SegmentComponent>
    )
  }
}

export default TableView