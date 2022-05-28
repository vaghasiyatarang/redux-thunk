import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AdjustIcon from "@mui/icons-material/Adjust";
import PersonIcon from "@mui/icons-material/Person";
import { lazy, Suspense } from "react";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Routes, Route, Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { alpha } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import Switch from "@mui/material/Switch";
import { AppContext } from "../App";
import Stack from "@mui/material/Stack";

import { useState } from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { useSelector } from "react-redux";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Client = lazy(() => import("./Client"));
const EditClient = lazy(() => import("./EditClient"));
const NewClient = lazy(() => import("./NewClient"));
const Cart = lazy(() => import("./Cart"));

const drawerWidth = 240;
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
console.log("Header component render");
const Header = () => {
  const [color, setColor] = useState("#045256");
  const { dark, setDark } = React.useContext(AppContext);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [note, setNote] = useState(5);

  const Data = useSelector((state: any) => state.menuData);

  // console.log(Data, "Data in Header component");

  const num = Data.filter((u: any) => u.isAddedtocart === true);
  const badgeContent = num.length
  // console.log(num.length,"num.lenght");


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const mystate = useSelector((state: any) => state.cartCount);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ background: color }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          {/* ------------------------------------------------------------------------------------------------------------ */}
          <Typography variant="h6" noWrap component="div" overflow={"hidden"}>
            Mini variant drawer
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Badge badgeContent={badgeContent} color="secondary" sx={{ marginLeft: "50%" }}>
            <Link to={"/cart"}>
              <ShoppingCartIcon color="action" />
            </Link>
          </Badge>

          <Badge badgeContent={note} color="error" sx={{ marginLeft: "1%" }}>
            <NotificationsActiveIcon
              color="action"
              onClick={() => {
                setNote(note + 1);
              }}
            />
          </Badge>
          <Stack
            direction="row"
            sx={{ alignItems: "center", marginLeft: "10%" }}
          >
            <Switch
              color="default"
              checked={dark}
              onChange={() => {
                setDark(!dark);
              }}
            />
            <input
              type="color"
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
            ></input>
            {/* ----------------------------------------------------------------------------------------------- */}
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            { text: "Home", icon: <HomeIcon /> },
            { text: "About", icon: <InfoIcon /> },
            { text: "Send email", icon: <AdjustIcon /> },
            { text: "Client", icon: <PersonIcon /> },
          ].map((e, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <Link
                    to={`/${e.text}`}
                    style={{ color: dark ? "white" : "black" }}
                  >
                    {e.icon}
                  </Link>
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                  <Link
                    to={`/${e.text}`}
                    style={{
                      color: dark ? "white" : "black",
                      textDecoration: "none",
                    }}
                  >
                    {e.text}
                  </Link>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <input
          type="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
          style={{ marginLeft: "5px" }}
        ></input>

        <br />
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Suspense
          fallback={
            <h1 style={{ textAlign: "center", marginTop: "100px" }}>
              <CircularProgress />
            </h1>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/client" element={<Client />} />
            <Route path="/edit" element={<EditClient />} />
            <Route path="/adduser" element={<NewClient />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Suspense>
      </Box>
    </Box>
  );
};
export default Header;
