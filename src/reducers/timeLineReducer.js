const initialState = {
  products: [],
  loading: true
};

export function timeLineReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PRODUCTS': {
      return {
        products: action.productList
      }
    }
  }
  return state;
}
