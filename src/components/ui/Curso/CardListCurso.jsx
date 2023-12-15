import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function CardListCurso({ instituicao_campus, nome_curso }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid container direction="row" alignItems="center">
          <Grid item xs={4}>
            <Typography variant="h5" align="center">
              {instituicao_campus}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" textAlign="center">
              {nome_curso}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
