import React, { Component } from 'react';
import { Form, Dropdown, Button } from 'semantic-ui-react';
import { coins, coinOpts } from '../../coins.js';

import './Form.css';

class FormComponent extends Component {
  state = {
    coin: '',
    costBasis: '',
    quantity: '',
    dateAcquired: '',
  }

  handleSubmit = (e) => {
    //disptatch some action
    e.preventDefault();
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleDropDownChange = (e, propsObj) => {
    const { name, value } = propsObj;

    this.setState({
      [name]: value,
    });
  }

  componentDidUpdate() {
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  showRequiredStar(inputField) {
    return this.state[inputField].length > 0
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
            <label>Cost Basis {this.showRequiredStar('costBasis')}</label>
            <Form.Input
              onChange={this.handleChange}
              name='costBasis'
              // value={'$'} 
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
        <Form.Field 
          control={Button}
          onClick={this.handleSubmit}>
          Add Transaction
        </Form.Field>
      </Form>
    )
  }
}


export default FormComponent;