import { createTheme } from "@mui/material/styles";
import { ptBR } from "@mui/material/locale";

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
      disabled: "#6357ff", // Cor do texto desati6357F1vado
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
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#6357F1",
          color: "#fff",
        },
        outlined: {
          color: "#6357F1",
        },
        root: {
          borderRadius: "20px",
        },
      },
    },
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
  },
  ptBR,
});

export default TemaPlanin;
