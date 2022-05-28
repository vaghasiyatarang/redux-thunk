// const initialState = (state : {user:[]})
// export const menudataReducer = (state={user:[]},action:any) =>{
interface type {
  id: string;
}
export const menudataReducer = (state: any = [], action: any) => {
  // console.log(action.payload, "action.payload");

  switch (action.type) {
    case "MENU_DATA":
      return action.payload;
      
    case "ADD_CART":
      const stateClone = state.slice(0);
      console.log("stateClone", stateClone);
      const index = stateClone.findIndex(
        (u: any) => u.id === action.payload.id
      );
      stateClone[index] = action.payload;
      return stateClone;

    case "LIST_DELET" : 

    const Liststate = state.filter((u:any)=>u.id !== action.payload);
    console.log('Liststate', state)
    return Liststate;

    default:
      return state;
  }
};
