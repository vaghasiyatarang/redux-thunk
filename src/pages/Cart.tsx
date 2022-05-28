import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CancelIcon from "@mui/icons-material/Cancel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import Stack from "@mui/material/Stack";
import { addCartAction } from "../redux/action/addCartAction";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled("div")<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
    ...(ownerState.active && {
      color: "#784af4",
    }),
    "& .QontoStepIcon-completedIcon": {
      color: "#784af4",
      zIndex: 1,
      fontSize: 18,
    },
    "& .QontoStepIcon-circle": {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "currentColor",
    },
  })
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

const steps = ["READY TO SHIP", "SHIPPED", "DELHIVERY"];
const Cart = () => {
  const [empty, setEmpty] = useState(true);
  const dispatch = useDispatch();
  const Data = useSelector((state: any) => state.menuData);

  const order = Data.filter((u: any) => u.isAddedtocart === true);

  console.log("order", order);
  return (
    <>
      {order && (
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {order &&
              order.map((item: any, i: any) => {
                return (
                  <Grid item xl={3} key={i}>
                    <Card sx={{ minWidth: 200 }}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
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

                      <CardActions sx={{ justifyContent: "center" }}>
                        <Box>
                          <Stepper
                            alternativeLabel
                            activeStep={1}
                            connector={<QontoConnector />}
                          >
                            {steps.map((label) => (
                              <Step key={label}>
                                <StepLabel StepIconComponent={QontoStepIcon}>
                                  {label}
                                </StepLabel>
                              </Step>
                            ))}
                          </Stepper>
                        </Box>
                      </CardActions>
                      <Stack>
                        <Button
                          variant="outlined"
                          color="error"
                          startIcon={<CancelIcon />}
                          onClick={() => {
                            if (
                              window.confirm(
                                "Are you sure want to cancel this order"
                              )
                            )
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
                        >
                          Cancel Order
                        </Button>
                      </Stack>
                    </Card>
                  </Grid>
                );
              })}
          </Grid>
        </Container>
      )}
      {order.length > 0 ? "":<h1 style={{textAlign:"center"}}>Cart is empty<hr></hr></h1>}
    </>
  );
};

export default Cart;
