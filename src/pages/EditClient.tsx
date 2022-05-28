import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link, Location, useLocation } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { editUser } from "../redux/action/editAction";
import TextField from "@mui/material/TextField";

interface IFormInput {
  name: string;
  email: string;
  phone: number;
}
interface LocationState {
  name: string;
  email: string;
  phone: any;
}
console.log("Edit Client component render");

const EditClient = () => {
  const dispatch = useDispatch<any>();
  const location: Location = useLocation();
  const editdata = location.state as LocationState;
  const [data, setData] = React.useState(editdata);
  console.log(data);

  const { register, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      name: data.name,
      email: data.email,
      phone: data.phone,
    },
  });

  const hndlinput: any = (e: any) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onSubmit: SubmitHandler<IFormInput> = () => {
    dispatch(editUser(data));
  };

  return (
    <>
      <h1 style={{textAlign:"center"}}>EditClient</h1>

      <form onSubmit={handleSubmit(onSubmit)} style={{ textAlign: "center" }}>
        <Stack spacing={2} sx={{alignItems:"center"}}>
        <TextField
         sx={{width:"30ch"}}
          id="standard-basic"
          label="Client Name"
          variant="outlined"
          {...register("name", { required: true, maxLength: 20 })}
          onChange={(e) => hndlinput(e)}
        />

        <TextField
        sx={{width:"30ch"}}
          id="standard-basic"
          label="Email"
          variant="outlined"
          {...register("email", { required: true, maxLength: 20 })}
          onChange={(e) => hndlinput(e)}
        />
        <TextField
        sx={{width:"30ch"}}
          id="standard-basic"
          label="Phone no"
          variant="outlined"
          {...register("phone", { required: true, maxLength: 20 })}
          onChange={(e) => hndlinput(e)}
        />
        </Stack>

        <Stack spacing={3} direction="row" justifyContent="center" mt="20px">
          <Link to="/client" style={{ textDecoration: "none", color: "white" }}>
            <Button variant="outlined">Go Back</Button>
          </Link>
          <input
            type="submit"
            style={{
              padding: "10px 15px",
              background: "#009AF8",
              border: "none",
              color: "white",
              borderRadius: "5px",
            }}
          ></input>
        </Stack>
      </form>
    </>
  );
};

export default EditClient;
