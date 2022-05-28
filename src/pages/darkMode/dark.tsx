import { useState } from "react";
import { createTheme } from '@mui/material/styles';

const [dark,setDark] = useState(false)

const theme = createTheme({
    palette :{
        mode: dark ? "dark" : "light"
    }
})