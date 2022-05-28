import { GET_USER_REQUEST, GET_USER_SUCCESS } from "../constant/constant";
import axios from "axios";

export const getuserList = () => async (dispatch: any) => {
  try {
    dispatch({ type: GET_USER_REQUEST });

    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log("get Action call");

    dispatch({ type: GET_USER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: "GET_USER_FAIL", payload: "Unable to fatch data" });
  }
};
