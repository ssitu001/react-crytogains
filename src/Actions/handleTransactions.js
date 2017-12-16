export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const DELETE_TRANSACTION = 'DELETE_TRANSACTION';
export const EDIT_TRANSACTION = 'EDIT_TRANSACTION';

export const addTransactionActionCreator = (trans) => {
  return {
    type: ADD_TRANSACTION,
    payload: trans,
  }
}

