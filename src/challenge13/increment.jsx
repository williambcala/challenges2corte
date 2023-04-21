import { createStore } from 'redux';




const initialState = {
    counter: 0,
  };
  const DECREMENT = 'DECREMENT';
  const INCREMENT_BY = 'INCREMENT_BY';

  const decrement = () => ({
    type: DECREMENT,
  });
  
  const incrementBy = (value) => ({
    type: INCREMENT_BY,
    payload: value,
  });

  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case DECREMENT:
        return {
          ...state,
          counter: state.counter - 1,
        };
      case INCREMENT_BY:
        return {
          ...state,
          counter: state.counter + action.payload,
        };
      default:
        return state;
    }

  };
  