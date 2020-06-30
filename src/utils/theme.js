import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

export const primaryColor = '#1717ff';
export const secondaryColor = '#00ed65';
export const textColor = '#2d2d2d';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1717ff',
    },
    secondary: {
      main: '#00ed65',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
