import { red } from "@material-ui/core/colors"
import { createMuiTheme } from "@material-ui/core/styles"

export const primaryColor = "#1717ff"
export const secondaryColor = "#00ed65"
export const textColor = "#2d2d2d"

export const theme = createMuiTheme({
  typography: {
    body1: {
      fontSize: 21,
    },
    h4: {
      margin: "42px 0 7px 0",
    },
  },
  palette: {
    primary: {
      main: "#1717ff",
    },
    secondary: {
      main: "#00ed65",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#F3F3EE",
    },
  },
})

export default theme
