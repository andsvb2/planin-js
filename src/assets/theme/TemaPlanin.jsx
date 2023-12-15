import { createTheme } from "@mui/material/styles";

const TemaPlanin = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6357F1",
    },
    secondary: {
      main: "#6357ff",
    },
    text: {
      hint: "#6357f1",
      primary: "#6357ff",
      secondary: "#6357ff",
      disabled: "#6357ff",
    },
  },
  components: {
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
  },
});

export default TemaPlanin;
