import React, { useCallback } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { itemData } from "../Menu/Menudata";
import CardMedia from "@mui/material/CardMedia";
import { useDispatch } from "react-redux";
import { addtocart } from "../redux/action/cartAction";
import DeleteIcon from "@mui/icons-material/Delete";
import Extra from "./Extra";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import { addCartAction } from "../redux/action/addCartAction";
import Tooltip from "@mui/material/Tooltip";
import { listdeleteAction } from "../redux/action/listdeleteAction";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const [passid,setPassid] = useState();
  const Data = useSelector((state: any) => state.menuData);

  console.log(Data, "data in Home");

  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const demo = useCallback(() => {
    setError(true);
  }, [error]);

  // const check = () => {
  //   console.log(e.target, "target--------");
  // };

  const handleClickOpen = (e:any) => {
    setOpen(true);
    setPassid(e)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const listdelete = () => {

    dispatch(listdeleteAction(passid));
    console.log(passid,"id state");
    
    setOpen(false);
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Home</h1>

      <Typography variant="h6" component="div" sx={{ textAlign: "center" }}>
        <Typography
          variant="h6"
          component="span"
          sx={{ borderTop: "2px solid black", p: "5px" }}
        >
          Menu
        </Typography>
      </Typography>
      <br />
      <br />
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {Data &&
            Data.map((item: any, i: any) => {
              return (
                <Grid item xl={3} key={i} sx={{ textAlign: "end" }}>
                  <Card sx={{ minWidth: 200 }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      alt="green iguana"
                    />
                    <CardContent sx={{ background: "ghostwhite" }}>
                      <Typography
                        // gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                          textAlign: "center",
                          textShadow: "0.2px 0.2px 5px #0000007a",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </CardContent>
                    {/*------------------------------- ADD TO CART   -----------------------------------  */}

                    <CardActions
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                        background: "ghostwhite",
                      }}
                    >
                      <Box component="span">
                        {item.isAddedtocart === false ? (
                          <Button
                            onClick={() => {
                              dispatch(
                                addCartAction({
                                  id: item.id,
                                  img: item.img,
                                  title: item.title,
                                  val: item.val,
                                  isAddedtocart: true,
                                })
                              );
                            }}
                          >
                            Add To Cart
                          </Button>
                        ) : (
                          <Checkbox
                            {...label}
                            color="error"
                            checked
                            checkedIcon={<Favorite />}
                            icon={<FavoriteBorder />}
                            onClick={() => {
                              dispatch(
                                addCartAction({
                                  id: item.id,
                                  img: item.img,
                                  title: item.title,
                                  val: item.val,
                                  isAddedtocart: false,
                                })
                              );
                            }}
                          />
                        )}
                      </Box>
                      <Tooltip title="Delet List" placement="left">
                        <>
                          <DeleteIcon
                            style={{
                              color: "#042f58",
                              textAlign: "center",
                              fontSize: "25px",
                              margin: "5px",
                            }}
                            onClick={()=>handleClickOpen(item.id)}
                            />
                          
                        </>
                      </Tooltip>
                      {/*  --------------------Dialog--------------------------- */}
                      <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                          >
                            <DialogTitle id="alert-dialog-title">
                              {"Use Google's location service?"}
                            </DialogTitle>
                            <DialogContent>
                              <DialogContentText id="alert-dialog-description">
                                Let Google help apps determine location. This
                                means sending anonymous location data to Google,
                                even when no apps are running.
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <Button onClick={handleClose}>Disagree</Button>
                              <Button
                                onClick={listdelete}
                                autoFocus
                              >
                                Agree
                              </Button>
                            </DialogActions>
                          </Dialog>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Container>

      <br />
      {error && (
        <Alert
          onClose={() => {
            setError(false);
          }}
        >
          This is a success alert — check it out!
        </Alert>
      )}
      <Extra demo={demo} />
    </>
  );
};

export default Home;
