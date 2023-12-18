import { createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
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
        root: {
          color: "#fff",
          backgroundColor: "#6357F1",
          "&:hover": {
            backgroundColor: "#6357ff",
          },
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
