import {fetchListAPI} from '../api';

export function fetchList() {
  return (dispatch) => {
    dispatch({
      type: 'REQUEST_API'
    });

    setTimeout(() => {
      fetchListAPI().then(result => {
        dispatch({
          type: 'FETCH_PRODUCT_LIST',
          list: result
        })
      });
    }, 2000);
  }
}