import _ from "lodash";

import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  // ADD_PRODUCT,
  // DELETE_PRODUCT,
} from "../actions/types";

// const STATE = {
//   cart: [],
// };

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, ..._.mapKeys(action.payload, "id") };

    case FETCH_PRODUCT:
      return { ...state, [action.payload.id]: action.payload };

    // case ADD_PRODUCT:
    //   if (state.cart.length === 0) {
    //     state.cart.push(action.payload);
    //   } else {
    //     state.cart.map((product) => {
    //       if (product.id === action.payload.id) {
    //         product.count += 1;
    //       } else {
    //         state.cart.push(action.payload);
    //       }
    //     });
    //   }

    //   console.log("++++", state);
    //   return { ...state };

    // case DELETE_PRODUCT:
    //   state.cart.map((product, index) => {
    //     if (product.id === action.payload && product.count > 1) {
    //       product.count -= 1;
    //     } else {
    //       if (product.id === action.payload) {
    //         state.cart.splice(index, 1);
    //       }
    //     }
    //   });
    //   console.log("-----", state);
    //   return { ...state };

    default:
      return state;
  }
};
