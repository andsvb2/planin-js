import { useEffect, useState } from "react";
import { Menu } from "@comp/ui/Menu";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import supabase from "@services/supabase.js";
import AvisoSemEntidade from "@comp/ui/AvisoSemEntidade";

const Disciplina = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [disciplinas, setDisciplinas] = useState([]);

  async function getData() {
    let { data: disciplina, error } = await supabase
      .from("disciplina")
      .select("*, curso(nome, campus(sigla, instituicao(nome, sigla)))");

    if (!error) {
      setDisciplinas(disciplina);
    } else {
      alert("Erro ao buscar as disciplinas");
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
              Disciplinas
            </Typography>
          </Box>
          <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
            <Grid m={1} sx={{ justifyContent: "space-between" }}>
              <Button variant="outlined" sx={{ ml: 2.5, borderRadius: "20px" }}>
                Ordenar por
              </Button>
              <Button variant="outlined" sx={{ borderRadius: "20px" }}>
                Exibir disciplinas (2)
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
                + Disciplina
              </Button>
            </Grid>
          </Grid>
          <Box>
            {disciplinas.length > 0 ? (
              disciplinas.map((disciplina) => (
                <Box
                  key={disciplina.id}
                  sx={{
                    minWidth: 275,
                    backgroundColor: "#F2EFEF",
                    ml: 3,
                    mr: 3,
                    mb: 3,
                    padding: "16px",
                    borderRadius: "8px",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <Typography
                    variant="body1"
                    fontWeight="inline"
                    align="center"
                  >
                    {`${disciplina.curso.campus.instituicao.sigla} - ${disciplina.curso.campus.sigla}`}
                  </Typography>
                  <Typography variant="h6" textAlign="center" fontWeight="bold">
                    {disciplina.nome}
                  </Typography>
                </Box>
              ))
            ) : (
              <AvisoSemEntidade mensagem="Nenhuma disciplina cadastrada." />
            )}
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Disciplina;
