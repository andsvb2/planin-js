import { useEffect, useState } from "react";
import { CriarCursoModal } from "@comp/form/CriarCurso";
import { Menu } from "@comp/ui/Menu";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import supabase from "@api/supabase.js";

const Curso = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [cursos, setCursos] = useState([]);

  async function getData() {
    let { data: curso, error } = await supabase.from("curso").select("*");
    if (!error) {
      setCursos(curso);
    } else {
      alert("Erro ao buscar os cursos");
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Grid component="main">
      <Box component="header">
        <Menu />
      </Box>
      <Box>
        <h1>Curso</h1>
        <button onClick={() => setIsModalOpen(true)}>Criar curso</button>
        <CriarCursoModal
          show={isModalOpen}
          handleClose={() => setIsModalOpen(false)}
        />
      </Box>
    </Grid>
  );
};

export default Curso;
