import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme(
    {
        palette: {
            primary: {
                main: '#262254',
            },
            secondary: {
                main: '#543884',
            },
            third: {
                main: '#5E84E6',
            },
            error: {
                main: red.A400,
            },
        },
    }
)