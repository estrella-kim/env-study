const initialState = {
  opened: false
};

export function sidebarReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR': {
      return {
        opened: !state.opened
      };
    }
  }
  return state;
}