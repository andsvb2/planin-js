import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';
import EditarCursoModal from '@comp/form/EditarCurso/EditarCursoModal'; // Importe o modal aqui

export default function CardListCurso({ cursoId, instituicao_campus, nome_curso }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleCardClick = () => {
    // Abra o modal e passe o cursoId
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    // Feche o modal ou faça qualquer outra lógica desejada aqui
    setModalOpen(false);
  };

  return (
    <>
      <CardActionArea onClick={handleCardClick}>
        <Card sx={{ minWidth: 275, backgroundColor: '#F2EFEF', ml: 3, mr: 3, mb: 3 }}>
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
      </CardActionArea>

      {/* Integrando o modal e passando o cursoId */}
      <EditarCursoModal isOpen={isModalOpen} onClose={handleCloseModal} cursoId={cursoId} />
    </>
  );
}
