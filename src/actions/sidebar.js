
export function toggle() {
  return (dispatch) => {
    dispatch({
      type: 'TOGGLE_SIDEBAR'
    });
  }
}