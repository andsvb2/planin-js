import { useEffect, useState, useCallback } from "react";
import { CriarCursoModal, EditarCursoModal } from "@form/CursoModal";
import { Menu } from "@ui/Menu";
import { CardCurso } from "@ui/CardCurso";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AvisoSemEntidade from "@ui/AvisoSemEntidade";
import {
  getCursoById,
  getCursoCampusTurno,
  getCursosCampiInstituicoes,
} from "@repository/curso.js";
import { getCampi } from "@repository/campus.js";
import { getTurnos } from "@repository/turno.js";

const Curso = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [cursos, setCursos] = useState([]);
  const [campi, setCampi] = useState([]);
  const [turnos, setTurnos] = useState([]);
  const [cursoSelecionado, setCursoSelecionado] = useState(null);

  const fetchCursos = useCallback(async () => {
    const fetchedCursos = await getCursosCampiInstituicoes();
    setCursos(fetchedCursos);
    await getCampiAndTurnos();
  }, []);

  useEffect(() => {
    fetchCursos();
  }, [fetchCursos]);

  const handleEditClick = async (curso) => {
    console.log("Curso.jsx -> handleEditClick: ", curso);
    const cursoEditavel = await getCursoById(curso.id);
    console.log(cursoEditavel);
    setCursoSelecionado(null);
    setCursoSelecionado(cursoEditavel);
    setShowEditModal(true);
  };

  const handleCreateClick = () => {
    setCursoSelecionado(null);
    setShowCreateModal(true);
  };

  const handleCriarModalClose = async () => {
    setShowCreateModal(false);
    // await fetchCursos();
  };

  const handleEditModalClose = async () => {
    setCursoSelecionado(null);
    setShowEditModal(false);
    // await fetchCursos();
  };

  const getCampiAndTurnos = async () => {
    try {
      const fetchedTurnos = await getTurnos();
      const fetchedCampi = await getCampi();
      setTurnos(fetchedTurnos);
      setCampi(fetchedCampi);
    } catch (error) {
      console.log(error);
    }
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
                onClick={handleCreateClick}
              >
                {" "}
                + Curso
              </Button>
            </Grid>
          </Grid>
          <Box>
            {cursos.length > 0 ? (
              cursos.map((curso) => (
                <CardCurso
                  key={curso.id}
                  campus={`${curso.campus.nome}`}
                  nome_curso={curso.nome}
                  curso_id={curso.id}
                  onCardClick={() => handleEditClick(curso)}
                />
              ))
            ) : (
              <AvisoSemEntidade mensagem="Nenhum curso cadastrado." />
            )}
          </Box>
          <Box>
            <CriarCursoModal
              show={showCreateModal}
              handleClose={handleCriarModalClose}
              campi={campi}
              turnos={turnos}
            />
            <EditarCursoModal
              show={showEditModal}
              handleClose={handleEditModalClose}
              curso={cursoSelecionado}
            />
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Curso;
