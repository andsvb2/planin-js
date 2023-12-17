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
      primary: "#6357ff", // Cor do texto principal
      secondary: "#6357ff", // Cor do texto secundário
      disabled: "#6357ff", // Cor do texto desativado
    },
  },
  components: {
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
  },
  typography: {
    fontFamily: [
      "Inter", // Texto padrão
      "Lato", // Títulos
      "sans-serif",
    ].join(","),
    allVariants: {
      color: "#6357ff", // Cor do texto global
    },
  },
});

export default TemaPlanin;
