import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red,green } from "@mui/material/colors";

const base = createTheme({
  palette: {
    primary: {
      main: "#ffd54f",
    },
    secondary: {
      main: "#FFFFFF",
    },
    success: {
      main: '#00e676',
    },
    error: {
      main: red[400],
    },
  },
  typography: {
    fontFamily: ["Marcellus", "serif"].join(","),
  },
});

const theme = responsiveFontSizes(base);

export default theme;
