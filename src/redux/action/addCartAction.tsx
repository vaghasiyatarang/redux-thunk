

export const addCartAction = (item:any) => {
    console.log(item,"id");
    
    return{
        type : "ADD_CART",
        payload:item
    }
}