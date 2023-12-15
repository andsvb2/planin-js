import { createTheme } from "@mui/material/styles";

const TemaPlanin = createTheme({
  components: {
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
  },
});

export default TemaPlanin;
