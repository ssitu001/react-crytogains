import axios from 'axios';

export const GET_PRICES = 'GET_PRICES';

export const getCurrentPriceOfCoin = (coin) => {
  return (dispatch) => {
    return axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${coin}&tsyms=USD`)
      .then(
        (coinData) => {
          dispatch({
            type: GET_PRICES,
            coinData: {...coinData.data, coin},
          });
        },
        (err) => console.log('An error occured', err)
      )
  }
}