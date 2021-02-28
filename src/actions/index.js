import products from "../apis/products";
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT,
} from "./types";

export const fetchProducts = () => async (dispatch) => {
  const response = await products.get("/products");

  dispatch({ type: FETCH_PRODUCTS, payload: response.data });
};

export const fetchProduct = (id) => async (dispatch) => {
  const response = await products.get(`/products/${id}`);

  dispatch({ type: FETCH_PRODUCT, payload: response.data });
};

// CART ACTIONS

export const addProduct = (item) => (dispatch) => {
  dispatch({
    type: ADD_PRODUCT,
    payload: item,
  });
};

export const deleteProduct = (id) => (dispatch) => {
  dispatch({
    type: DELETE_PRODUCT,
    payload: id,
  });
};
