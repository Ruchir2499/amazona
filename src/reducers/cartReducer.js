import { ADD_PRODUCT, DELETE_PRODUCT } from "../actions/types";

// const STATE = {
//   cart: {},
// };

export default (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      if (state.length === 0) {
        state.push(action.payload);
      } else {
        state.map((product) => {
          if (product.id === action.payload.id) {
            product.count += 1;
          } else {
            state.push(action.payload);
          }
        });
      }

      console.log("++++", state);
      return [...state];

    case DELETE_PRODUCT:
      state.map((product, index) => {
        if (product.id === action.payload && product.count > 1) {
          product.count -= 1;
        } else {
          if (product.id === action.payload) {
            state.splice(index, 1);
          }
        }
      });
      console.log("-----", state);
      return [...state];

    default:
      return state;
  }
};
