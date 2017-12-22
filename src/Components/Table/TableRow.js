import React from 'react';
import { Table } from 'semantic-ui-react';
import { connect } from 'react-redux';

import './TableRow.css';

const avgPricePerCoin = (pricePaid, quantity) => {
  return fixAndaddDollarSign(( pricePaid / quantity ));
};

const profitPerCoin = (currentCoinPrice, pricePaidPerCoin, quantity) => {
  return fixAndaddDollarSign(( quantity * currentCoinPrice ) - pricePaidPerCoin);
};

const percentageProfitPerCoin = (profitPerCoin, pricePaidPerCoin) => {
  return ( profitPerCoin / pricePaidPerCoin );
}

const calculating = () => {
  return 'Calculating...';
}

const fixAndaddDollarSign = (num) => {
  return `$${num.toFixed(2)}`;
}

const fixAndaddPercentageSign = (num) => {
  return `${(num).toFixed(2)}%`;
}

const decoratePercentageGain = (percentage) => {  
  return ((percentage *= 100) > 0)
  ? <span className='gain'>+{fixAndaddPercentageSign(percentage)}</span>
  : <span className='loss'>{fixAndaddPercentageSign(percentage)}</span>
}

const TableRow = ({tran, price}) => {
  console.log('tableRowPrice', price)
  const { dateAcquired, costBasis, quantity } = tran;
  const avgPer = avgPricePerCoin(costBasis, quantity);
  const profitPer = profitPerCoin(price, costBasis, quantity)
  const percentageGainPer = percentageProfitPerCoin((( quantity * price ) - costBasis), costBasis);
  return (
    <Table.Row>
      <Table.Cell>Delete</Table.Cell>
      <Table.Cell>{dateAcquired}</Table.Cell>
      <Table.Cell>{fixAndaddDollarSign(costBasis)}</Table.Cell>
      <Table.Cell>{quantity}</Table.Cell>
      <Table.Cell>
      {
        price
        ? avgPer
        : calculating()
      }
      </Table.Cell>
      <Table.Cell>
      {
        price
        ? profitPer
        : calculating()
      }
      </Table.Cell>
      <Table.Cell>
      {
        price
        ? decoratePercentageGain(percentageGainPer)
        : calculating()
      }
      </Table.Cell>
    </Table.Row>
  )
}

export default TableRow;