import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

const ItemMenuCentral = ({ imagem, textoAlternativo, textoPrincipal }) => {
  return (
    <Stack direction="row" useFlexGap flexWrap="wrap">
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        width={106}
      >
        <img src={imagem} alt={textoAlternativo} width="64px" />
        <Typography
          variant="h6"
          component="h1"
          sx={{ fontFamily: "Inter", fontWeight: 600, color: "#6357F1" }}
        >
          {textoPrincipal}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ItemMenuCentral;
