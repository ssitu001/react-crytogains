import React, { Component } from 'react';
import { Form, Dropdown, Button } from 'semantic-ui-react';
import { coins, coinOpts } from '../../coins.js';
import { connect } from 'react-redux';
import { addTransactionActionCreator } from '../../Actions/handleTransactions';
import { getCurrentPriceOfCoin } from '../../Actions/getPrices';

import './Form.css';

class FormComponent extends Component {
  state = {
    transaction: {
      coin: '',
      costBasis: '',
      quantity: '',
      dateAcquired: '-',
    },
    currentCoins: new Set(),
  }

  validateSubmission = () => {
    const { coin, costBasis, quantity } = this.state.transaction;
    return coin.length && costBasis.length && quantity.length;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { currentCoins, transaction } = this.state;
    const { getCurrentPriceOfCoin } = this.props;
    const currentCoin = transaction.coin;

    this.props.addTransaction(transaction);

    //if coin doesn't exist, get associated price
    if (!currentCoins.has(currentCoin)) {
      currentCoins.add(currentCoin)
      getCurrentPriceOfCoin(currentCoin);
    }
    //but no matter what recalculate profits when a transaction is added
  };

  handleChange = (e) => {
    this.setState({
      transaction: {
        ...this.state.transaction,
        [e.target.name]: e.target.value,
      }
    });
  }

  handleDropDownChange = (e, propsObj) => {
    const { name, value } = propsObj;

    this.setState({
      transaction: {
        ...this.state.transaction,
        [name]: value,
      }
    });
  }

  componentDidMount() {
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  showRequiredStar(inputField) {
    return this.state.transaction[inputField].length > 0
    ? null
    : <span className="required-field">*</span>;
  };

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Field width={4}>
            <label>Coin {this.showRequiredStar('coin')}</label>
            <Dropdown 
              fluid 
              search 
              selection 
              options={coinOpts}
              onChange={this.handleDropDownChange}
              name='coin'
              placeholder='Select Coin' 
            />
          </Form.Field>
          <Form.Field width={4}>
            <label>Cost Basis ($) {this.showRequiredStar('costBasis')}</label>
            <Form.Input
              type='number' 
              min="1"
              onChange={this.handleChange}
              name='costBasis'
              placeholder='$0'/>
          </Form.Field>
          <Form.Field width={4}>
            <label>Quantity {this.showRequiredStar('quantity')}</label>
            <Form.Input 
              type='number' 
              min="1"
              onChange={this.handleChange}
              name='quantity'
              placeholder='ex 2.77'
            />
          </Form.Field>
          <Form.Field width={4}>
            <label>Date Acquired</label>
            <Form.Input
              input='date'
              onChange={this.handleChange}
              name='dateAcquired' 
            />
          </Form.Field>
        </Form.Group>
        { 
          this.validateSubmission() 
          ? <Form.Field 
              control={Button}
              onClick={this.handleSubmit}>
                Add Transaction
            </Form.Field> 
          : null 
        }
      </Form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTransaction: (trans) => dispatch(addTransactionActionCreator(trans)),
    getCurrentPriceOfCoin: (coin) => dispatch(getCurrentPriceOfCoin(coin)),
  }
};

export default connect(null, mapDispatchToProps)(FormComponent);