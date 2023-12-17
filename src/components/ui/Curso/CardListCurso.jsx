import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function CardListCurso({ instituicao_campus, nome_curso }) {
  return (
    <Card sx={{ minWidth: 275, backgroundColor: "#F2EFEF", ml:3 , mr:3, mb: 3 }}>
      <CardContent>
        <Grid container direction="row" alignItems="center">
          <Grid item xs={4}>
            <Typography variant="body1" align="center">
              {instituicao_campus}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" textAlign="center">
              {nome_curso}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
