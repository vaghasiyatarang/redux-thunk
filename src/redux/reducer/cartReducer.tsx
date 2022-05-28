const initialState = 0;

export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "INC_NUMBER":
      return state + 1;
    default: return state;
  }
};
export default cartReducer;

// const initialState = 20;

// const changeTheNumber = (state = initialState, action) => {
//     switch (action.type) {
//         case "INCREMENT": return state + action.payloads;
//         case "DECREMENT": return state - 1;
//         default: return state;
//     }
// }
// export default changeTheNumber;
