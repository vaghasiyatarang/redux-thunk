import {
  DELET_USER,
  GET_USER_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  EDIT_USER,
  ADD_USER
} from "../constant/constant";

interface Usertyp {
  id: string;
}

export const reducer = (
  state: { users: Usertyp[] } = { users: [] },
  action: any
) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        loading: true,
      };
    case GET_USER_SUCCESS:
      // console.log(action.payload, "action.payload");
      return {
        loading: false,
        users: action.payload,
      };
    case GET_USER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case DELET_USER:
      console.log(action.payload, "-----------action.payload");

      return {
        users: (state.users ?? []).filter((u) => u.id !== action.payload),
      };

    case EDIT_USER:
      console.log(action.payload, "------action.payload");

      const index = state.users.findIndex((u) => u.id === action.payload.id);
      console.log(index, "-------index");
      state.users[index] = action.payload;

      return {
        ...state,
        users:[...state.users]
        
      };
    case ADD_USER : 
    return {
      // ...state,
      users: [...state.users,action.payload]
    }
    default:
      return state;
  }
};

// export default reducer
