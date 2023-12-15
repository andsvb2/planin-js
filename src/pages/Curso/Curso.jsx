import { useState } from "react";
import { CriarCursoModal } from "@comp/form/CriarCurso";
import { Menu } from "@comp/ui/Menu";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

const Curso = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Grid component="main">
      <Box component="header">
        <Menu />
      </Box>
      <Box>
        <h1>Curso</h1>
        <button onClick={() => setIsModalOpen(true)}>Criar curso</button>
      <CriarCursoModal show={isModalOpen} handleClose={() => setIsModalOpen(false)} />
      </Box>
    </Grid>
  );
};

export default Curso;


