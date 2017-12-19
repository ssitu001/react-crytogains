import { GET_PRICES } from '../Actions/getPrices';

const getPrices = (state = {}, action) => {
  switch (action.type) {
    case GET_PRICES:
      const { coin, USD } = action.coinData
      return {...state, [coin]: USD}
    default:
      return state;
  }
};

export default getPrices;
