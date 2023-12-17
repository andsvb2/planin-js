import React, { useState, useEffect } from "react";
import { CriarCursoModal } from "@comp/form/CriarCurso";
import { Menu } from "@comp/ui/Menu";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import supabase from "@api/supabase.js";

import noDataImage from "../../assets/img/attention_5973444.png"; // Importe a imagem necessária

const Calendario = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [calendarios, setCalendarios] = useState([]);

  async function getData() {
    let { data: calendario, error } = await supabase
      .from("calendario")
      .select("*");

    if (!error) {
      setCalendarios(calendario);
    } else {
      alert("Erro ao buscar os calendários");
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
              Calendários
            </Typography>
          </Box>
          <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
            <Grid m={1} sx={{ justifyContent: "space-between" }}>
              <Button variant="outlined" sx={{ ml: 2.5, borderRadius: "20px" }}>
                Ordenar por
              </Button>
              <Button variant="outlined" sx={{ borderRadius: "20px" }}>
                Exibir calendários (2)
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
                + Calendário
              </Button>
            </Grid>
          </Grid>
          <CriarCursoModal
            show={isModalOpen}
            handleClose={() => setIsModalOpen(false)}
          />
          <Box>
            {calendarios.length > 0 ? (
              calendarios.map((calendario) => (
                <Box
                  key={calendario.id}
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
                  <Typography variant="h6" textAlign="center" fontWeight="bold">
                    {calendario.nome}
                  </Typography>
                  <Typography
                    variant="body1"
                    fontWeight="inline"
                    align="center"
                    mt={2}
                  >
                    {calendario.descricao}
                  </Typography>
                </Box>
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
                  Nenhum calendário cadastrado
                </Typography>
              </Box>
            )}
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Calendario;
