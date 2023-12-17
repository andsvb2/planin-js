import { useEffect, useState } from "react";
import { CriarCursoModal } from "@comp/form/CriarCurso";
import { Menu } from "@comp/ui/Menu";
import { CardListCurso } from "@comp/ui/Curso";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
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
          spacing={2}
          sx={{
            justifyContent: "space-between",
            borderRadius: 3,
            border: "3px #F1F1F1 solid",
            margin: "1px",
          }}
        >
          <Box width={132} height={38} ml={1}>
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
                  id={curso.id}
                />
              ))
            ) : (
              <Typography
                variant={"h4"}
                textAlign={"center"}
                color={"red"}
                m={2}
                sx={{ border: "1px solid red", borderRadius: 2 }}
              >
                Nenhum curso cadastrado
              </Typography>
            )}
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Curso;
