import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import { connect } from 'react-redux';

class FooterComponent extends Component {

  componentDidUpdate() {
    console.log('prices', this.props.currentCoinPrice);
  }

  render() {
    const { coin } = this.props;
    const { currentCoinPrice } = this.props;
    return (
      <Table.Footer fullWidth>
        <Table.Row>
          <Table.HeaderCell colSpan="1">
            {currentCoinPrice[coin]}
          </Table.HeaderCell>
          <Table.HeaderCell colSpan="6">
            Something Else
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentCoinPrice: state.getPrices,
  };
};

export default connect(mapStateToProps)(FooterComponent);