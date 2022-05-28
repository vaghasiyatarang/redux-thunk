import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getuserList } from "../redux/action/getAction";
import { deletUser } from "../redux/action/deletAction";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import {Link } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Typography from '@mui/material/Typography';
import { AppContext } from "../App";
import { useContext } from "react";

//                        Data Table

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },

}));
console.log("Client component render");

const Client = () => {
  const {dark} = useContext(AppContext)
  const dispatch = useDispatch<any>();
  const userdata = useSelector((state: any) => state.userList);

  const { loading, users, error } = userdata;
  // console.log(users, "user");
  useEffect(() => {
    dispatch(getuserList());
  }, [dispatch]);

  const hndldelete = (id: any) => {
    dispatch(deletUser(id));
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Client List</h1>
      <br />
      {loading && <h1 style={{textAlign:"center",marginTop:"100px"}}><CircularProgress/></h1>}
      {!loading && error && <h1>{error}</h1>}

      <Typography variant="h1" component="div" sx={{textAlign:"end"}}>
      <Link to="/adduser" style={{color:dark ? "white" : "#2E4053"}}>
          <PersonAddIcon style={{fontSize:"64px"}}/>
      </Link>
      </Typography>

      <TableContainer component={Paper} >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>No.</StyledTableCell>
              <StyledTableCell>Client Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Phone</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!loading &&
              users &&
              users.map((e: any, i: any) => (
                <StyledTableRow key={i}>
                  <StyledTableCell component="th" scope="row">
                    {i + 1}
                  </StyledTableCell>
                  <StyledTableCell>{e.name}</StyledTableCell>
                  <StyledTableCell>{e.email}</StyledTableCell>
                  <StyledTableCell>{e.phone}</StyledTableCell>
                  {/* {console.log(e.id)} */}
                  <StyledTableCell>
                    <Link to="/edit" state={e} style={{textDecoration:"none",color:dark ? "white" : "black"}}>
                      <ModeEditOutlineIcon /> {"  "}
                    </Link>

                    <DeleteIcon
                      onClick={() => {
                        hndldelete(e.id);
                      }}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Client;
