import { EDIT_USER } from "../constant/constant";
import axios from 'axios';

export const editUser = (editdata:any) => async(dispatch:any) => {
    try {
        
        console.log(editdata);
        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${editdata.id}`,editdata)
        
        console.log(res,"--------------editUser res");
        
        dispatch({type:EDIT_USER , payload:res.data})

        
    } catch (error) {
        console.log(error,"--------------editUser error");
        
    }
}