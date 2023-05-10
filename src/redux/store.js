// store.js
import { createStore } from 'redux';

// Define the initial state
const initialState = {
  checkedRows:[],
};

// Define a reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CHECKED_ROWS':
      return {
        ...state,
        checkedRows: action.payload,
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(reducer);

export default store;

