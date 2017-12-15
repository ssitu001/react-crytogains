import React from 'react';
import { Form, Dropdown, Button } from 'semantic-ui-react';
import { coins, coinOpts } from '../../coins.js';

const FormComponent = () => (
  <Form>
    <Form.Group>
      <Form.Field width={4}>
        <label>Coin</label>
        <Dropdown fluid search selection options={coinOpts} placeholder='Select Coin' />
      </Form.Field>
      <Form.Field width={4}>
        <label>Cost Basis</label>
        <Form.Input placeholder='$0' />
      </Form.Field>
      <Form.Field width={4}>
        <label>Quantity</label>
        <Form.Input placeholder='0.00'/>
      </Form.Field>
      <Form.Field width={4}>
        <label>Date Acquired</label>
        <Form.Input placeholder='MM/DD/YYYY'/>
      </Form.Field>
    </Form.Group>
    <Form.Field control={Button}>Add</Form.Field>
  </Form>
)

export default FormComponent;