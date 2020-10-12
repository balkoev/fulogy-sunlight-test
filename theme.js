import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#01BDA7",
    },
    secondary: {
      main: "#00BFA5",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },

  typography: {
    fontFamily: ["Open Sans, Roboto"].join(", "),
  },
});

export default theme;
