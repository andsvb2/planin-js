import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Menu } from "@ui/Menu";
import { CardListCurso } from "@ui/Curso";
import { useEffect, useState } from "react";
import supabase from "@api/supabase.js";

const Teste = () => {
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
      <Box></Box>
    </Grid>
  );
};

export default Teste;
