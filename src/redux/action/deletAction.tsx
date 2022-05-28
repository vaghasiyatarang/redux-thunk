import axios from "axios";
import { DELET_USER } from "../constant/constant";

export const deletUser = (id:number) => async(dispatch:any) => {
    
    try {

        const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        console.log(res);
        

        dispatch({type:DELET_USER , payload : id})
    } catch (error) {
        console.log(error);
    }
}