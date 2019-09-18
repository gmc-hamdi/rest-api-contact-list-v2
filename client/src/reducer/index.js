const intialState = {
  isLoading: false,
  contact: []
};
export const reducer = (state = intialState, action) => {
  if (action.type === "GET_CONTACT") {
    return { isLoading: false, contact: [...action.payload] };
  } else if (action.type === "Loading_CONTACT") {
    return { ...state, isLoading: true };
  } else {
    return state;
  }
};
