import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';
export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark:'#E03835',
    main:'#E03835',
    light: '#E03835'
  },
  secondary: {
    dark:'#0B357C',
    main:'#0B357C',
    light: '#0B357C'
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400]
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400]
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400]
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600]
  },
  background: {
    default: '#F4F6F8',
    paper: white
  },
  icon: "#E03835",
  divider: "#0B357C",
  
};
