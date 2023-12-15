import { useEffect, useState } from "react";
import { CriarCursoModal } from "@comp/form/CriarCurso";
import { Menu } from "@comp/ui/Menu";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import supabase from "@api/supabase.js";


const Curso = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [cursos, setCursos] = useState([]);

  async function getData() {
    let { data: curso, error } = await supabase
      .from("curso")
      .select("*, campus(nome, sigla, instituicao(nome, sigla))");

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
      <Typography variant="h1" style={{ fontSize: "2.5rem" }}>Cursos</Typography>
        <Button
              variant="contained"
              color="primary"
              style={{ backgroundColor: "#6357F1", color: "#fff", borderRadius: "20px" }}
              onClick={() => setIsModalOpen(true)}> + Curso</Button>
      <CriarCursoModal show={isModalOpen} handleClose={() => setIsModalOpen(false)} />
      </Box>
    </Grid>
  );
};

export default Curso;
