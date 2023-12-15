
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function CardListCurso({ sigla_instituicao, nome_curso }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid container spacing={1} direction="column" alignItems="center">
          <Grid item>
            <Typography variant="h5" component="div">
              {sigla_instituicao}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">
              {nome_curso}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
