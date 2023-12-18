import { useEffect, useState } from "react";
import { CursoModal } from "@form/CursoModal";
import { Menu } from "@ui/Menu";
import { CardCurso } from "@ui/CardCurso";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import supabase from "@services/supabase.js";
import AvisoSemEntidade from "@ui/AvisoSemEntidade";

const Curso = () => {
  const [showCursoModal, setShowCursoModal] = useState(false);
  const [editarCurso, setEditarCurso] = useState(null);
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

  const handleCardClick = (curso) => {
    setEditarCurso(curso);
    setShowCursoModal(true);
  };

  const handleModalClose = () => {
    setEditarCurso(null);
    setShowCursoModal(false);
  };

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
              <Button variant="outlined" sx={{ ml: 2.5 }}>
                Ordenar por
              </Button>
              <Button variant="outlined" sx={{ borderRadius: "20px" }}>
                Exibir cursos (2)
              </Button>
            </Grid>
            <Grid m={1}>
              <Button
                variant="contained"
                style={{
                  width: "152px",
                  marginRight: "20px",
                }}
                onClick={() => setShowCursoModal(true)}
              >
                {" "}
                + Curso
              </Button>
            </Grid>
          </Grid>
          <Box>
            <CursoModal
              show={showCursoModal}
              handleClose={handleModalClose}
              cursoInicial={editarCurso}
            />
            {cursos.length > 0 ? (
              cursos.map((curso) => (
                <CardCurso
                  key={curso.id}
                  instituicao_campus={`${curso.campus.instituicao.sigla} - ${curso.campus.sigla}`}
                  nome_curso={curso.nome}
                  curso_id={curso.id}
                  onCardClick={() => handleCardClick(curso)}
                />
              ))
            ) : (
              <AvisoSemEntidade mensagem="Nenhum curso cadastrado." />
            )}
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Curso;
