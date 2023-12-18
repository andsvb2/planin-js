import React, { useEffect, useState } from "react";
import { CriarCursoModal } from "@comp/form/CriarCurso";
import { Menu } from "@comp/ui/Menu";
import { CardListCurso } from "@comp/ui/Curso";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import supabase from "@services/supabase.js";

import noDataImage from "@img/attention_5973444.png"; // Importe a imagem necessária

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
    <Grid component="main" rowSpacing={12}>
      <Grid component="header" mt={3} mb={3}>
        <Menu />
      </Grid>
      <Grid
        width={"90dvw"}
        height={"80dvh"}
        ml={5}
        mr={5}
        sx={{ justifyContent: "center" }}
      >
        <Stack
          spacing={3}
          sx={{
            justifyContent: "space-between",
            margin: "50px",
          }}
        >
          <Box width={132} height={38} ml={4}>
            <Typography variant="h1" style={{ fontSize: "2.5rem" }}>
              Cursos
            </Typography>
          </Box>
          <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
            <Grid m={1} sx={{ justifyContent: "space-between" }}>
              <Button variant="outlined" sx={{ ml: 2.5, borderRadius: "20px" }}>
                Ordenar por
              </Button>
              <Button variant="outlined" sx={{ borderRadius: "20px" }}>
                Exibir cursos (2)
              </Button>
            </Grid>
            <Grid m={1}>
              <Button
                variant="contained"
                color="primary"
                style={{
                  width: "152px",
                  height: "34px",
                  backgroundColor: "#6357F1",
                  color: "#fff",
                  borderRadius: "20px",
                  marginRight: "20px",
                }}
                onClick={() => setIsModalOpen(true)}
              >
                {" "}
                + Curso
              </Button>
            </Grid>
          </Grid>
          <CriarCursoModal
            show={isModalOpen}
            handleClose={() => setIsModalOpen(false)}
          />
          <Box>
            {cursos.length > 0 ? (
              cursos.map((curso) => (
                <CardListCurso
                  key={curso.id}
                  instituicao_campus={`${curso.campus.instituicao.sigla} - ${curso.campus.sigla}`}
                  nome_curso={curso.nome}
                  curso_id={curso.id}
                />
              ))
            ) : (
              <Box
                sx={{
                  border: "2px dashed #ccc",
                  borderRadius: "8px",
                  padding: "16px",
                  backgroundColor: "#F9F9F9",
                  textAlign: "center",
                }}
              >
                <Box
                  component="img"
                  src={noDataImage}
                  alt="Nenhum dado encontrado"
                  sx={{ width: 100, height: 100, mb: 2 }}
                />
                <Typography
                  variant={"h4"}
                  textAlign={"center"}
                  color={"text.secondary"}
                  m={2}
                >
                  Nenhum curso cadastrado
                </Typography>
              </Box>
            )}
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Curso;
