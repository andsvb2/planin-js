import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import CardActionArea from "@mui/material/CardActionArea";

const CardCurso = ({ onCardClick, campus, nome_curso }) => {
  return (
    <>
      <CardActionArea onClick={onCardClick}>
        <Card
          sx={{
            minWidth: 275,
            backgroundColor: "#F2EFEF",
            mx: 3, // mx = margem no eixo X (esq-dir)
            mb: 3,
            border: "0.5px solid #f0f0f0",
            borderRadius: 6,
          }}
        >
          <CardContent>
            <Grid container direction="row" alignItems="center">
              <Grid xs={4}>
                <Typography variant="body1" fontWeight="inline" align="center">
                  {campus}
                </Typography>
              </Grid>
              <Grid>
                <Typography variant="h6" textAlign="center" fontWeight="bold">
                  {nome_curso}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </CardActionArea>
    </>
  );
};

export default CardCurso;
