import React, { useEffect } from "react";
import { lazy, Suspense } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createContext } from "react";
import { itemData } from "./Menu/Menudata";
import { useDispatch } from "react-redux";
import { menudata } from "./redux/action/menudataAction";

import "./App.css";
const Header = lazy(() => import("./pages/Header"));

interface stateinterface {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<stateinterface>({
  dark: false,
  setDark: () => {},
});

const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(menudata(itemData));
  }, []);

  const [dark, setDark] = useState(false);

  const theme = createTheme({
    palette: {
      mode: dark ? "dark" : "light",
    },
  });

  console.log("App component render");

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppContext.Provider value={{ dark, setDark }}>
          <Suspense
            fallback={
              <h1 style={{ textAlign: "center", marginTop: "200px" }}>
                <CircularProgress />
              </h1>
            }
          >
            <Header />
          </Suspense>
        </AppContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
export { AppContext };
