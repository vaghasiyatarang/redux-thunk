import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { adduser } from "../redux/action/addAction";

interface localdata {
  name: string;
  email: string;
  phone: string;
}
const validationSchema = yup.object({
  name: yup.string().required("Name is required"),

  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup.number().required("Phone is required"),
});
console.log("New Client component render");

const EditClient = () => {
  const dispatch = useDispatch<any>();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      dispatch(adduser(values));

      // const data = localStorage.getItem('item');
      //   const dataList = JSON.parse(data) || []
      // const localData: string = localStorage.getItem("item") || "";
      // const dataList = JSON.parse(localData) || [];
      // console.log(dataList, "dataList---");
      // const data: { name: string; email: string; phone: string } = {
      //   name: values.name,
      //   email: values.email,
      //   phone: values.phone,
      // };
      // console.log(data, "data");

      // dataList.push(data);

      // localStorage.setItem("item", JSON.stringify(dataList));
      // console.log(dataList, "Set dataList");
    },
  });

  return (
    <>
      <Link to="/client" style={{ textDecoration: "none", color: "white" }}>
        <Button variant="outlined" sx={{ m: "10px" }}>
          Go Back
        </Button>
      </Link>
      <h1 style={{ textAlign: "center" }}>Add Client</h1>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <Box
            sx={{
              p: "10px",
              textAlign: "center",
            }}
          >
            <Stack spacing={2} sx={{ alignItems: "center" }}>
              <TextField
                sx={{ width: "25ch" }}
                id="name"
                name="name"
                label="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
              <TextField
                sx={{ width: "25ch" }}
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                sx={{ width: "25ch" }}
                id="phone"
                name="phone"
                label="Phone No"
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
            </Stack>

            <Button
              color="primary"
              variant="contained"
              sx={{ width: "10ch", m: "10px auto" }}
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </form>
      </div>
    </>
  );
};

export default EditClient;
