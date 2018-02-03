import { fetchProductListAPI } from '../api/fetchProductList';

export function fetchProductList() {
  return function(dispatch) {
    dispatch({
      type: 'REQUEST_PRODUCTS'
    });
    fetchProductListAPI().then(productList => {
      console.log(productList);

      setTimeout(() => {
        dispatch({
          type: 'FETCH_PRODUCTS',
          productList
        });
      }, 1000)
    });
  }
}