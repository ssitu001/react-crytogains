import { ADD_TRANSACTION } from '../Actions/handleTransactions';

const sanitizeTrans = (trans) => {
  const { coin, costBasis, quantity, dateAcquired } = trans;
  return {
    coin,
    costBasis: Number(costBasis),
    quantity: Number(quantity),
    dateAcquired, //use moment
  };
};

const handleTransaction = (state = {}, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      const transToAdd = sanitizeTrans(action.payload);
      const coinName = transToAdd.coin
      return (state[coinName])
        ? {...state, [coinName]: [...state[coinName], {...transToAdd, id: action.id}]}
        : {...state, [coinName]: [{...transToAdd, id: action.id}]};
    default:
      return state;
  }
};

export default handleTransaction;