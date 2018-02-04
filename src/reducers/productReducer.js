const initialState = {
  list: [],
  loading: true
};

export function productReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PRODUCT_LIST': {
      return {
        list: action.list
      };
    }
  }
  return state;
}