import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Menu } from "@ui/Menu";

const Teste = () => {
  return (
    <Grid component="main">
      <Box component="header">
        <Menu />
      </Box>
      <Box>
        <h1>Teste</h1>
      </Box>
    </Grid>
  );
};

export default Teste;
