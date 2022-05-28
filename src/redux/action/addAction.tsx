import { ADD_USER } from "../constant/constant";
import axios from 'axios';


export const adduser = (adddata:any) => async(dispatch:any) => {
    console.log(adddata)
    try {
        const res = await axios.post("https://jsonplaceholder.typicode.com/users",adddata)

        dispatch({type:ADD_USER,payload:res.data})
    } catch (error) {
        console.log(error,"----------adduser error");
        
    }
}