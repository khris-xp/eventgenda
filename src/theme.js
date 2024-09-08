import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',  // Adjust based on Taikai's color scheme
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
  },
});

export default theme;
