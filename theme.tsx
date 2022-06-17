import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import styles from "./styles/base.module.scss";

let theme = createTheme({
  palette: {
    primary: {
      main: styles.primaryColor,
    },
    secondary: {
      main: styles.secondaryColor,
    },
  },
  typography: {
    fontFamily: styles.bodyFont,
    h1: {
      fontFamily: styles.headingFont,
      fontWeight: 600,
    },
    h2: {
      fontFamily: styles.headingFont,
      fontWeight: 700,
    },
    h3: {
      fontFamily: styles.headingFont,
      fontWeight: 600,
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
});
theme = responsiveFontSizes(theme);
export default theme;
