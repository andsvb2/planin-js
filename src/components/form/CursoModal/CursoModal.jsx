import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import supabase from "@services/supabase.js";
import { criarCurso, atualizarCurso, apagarCurso } from "@repository/curso.js";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { InputTexto } from "@comp/form/InputTexto";
import { AutocompleteRHF } from "@comp/form/AutocompleteRHF";

const CursoModal = ({ show, handleClose, cursoInicial }) => {
  const defaultValues = {
    nome: cursoInicial ? cursoInicial.nome : "",
    campus_id: cursoInicial ? cursoInicial.campus_id : "",
    turno_id: cursoInicial ? cursoInicial.turno_id : "",
    sigla: cursoInicial ? cursoInicial.sigla : "",
  };

  const {
    watch,
    control,
    formState: { errors },
    handleSubmit,
    getValues,
    reset,
  } = useForm({
    defaultValues,
  });

  const [turnos, setTurnos] = useState([]);
  const [campi, setCampi] = useState([]);
  const [resetCount, setResetCount] = useState(0);

  async function getTurnos() {
    let { data: turno, error } = await supabase.from("turno").select("*");
    if (!error) {
      setTurnos(turno);
    } else {
      alert("Erro ao buscar os turnos");
    }
  }

  async function getCampi() {
    let { data: campus, error } = await supabase
      .from("campus")
      .select("*, instituicao(sigla)");
    if (!error) {
      setCampi(campus);
    } else {
      alert("Erro ao buscar os campi");
    }
  }

  useEffect(() => {
    getTurnos();
    getCampi();
  }, []);

  const defaultCampi = {
    options: campi,
    getOptionLabel: (option) =>
      option.instituicao.sigla +
      " - " +
      option.sigla +
      " (" +
      option.cidade +
      ")",
  };

  const defaultTurnos = {
    options: turnos,
    getOptionLabel: (option) => option.turno,
  };

  function reloadPageAndCloseModal() {
    window.location.reload();
    handleClose();
  }

  const onSubmit = (values) => {
    if (cursoInicial) {
      atualizarCurso({ ...cursoInicial, ...values }, cursoInicial.id);
    } else {
      const curso = { ...values };
      criarCurso(curso);
    }
    reloadPageAndCloseModal();
  };

  const handleReset = () => {
    reset({ ...defaultValues, campus_id: "", turno_id: "" });
    setResetCount(resetCount + 1);
    handleClose();
  };

  const handleDelete = () => {
    if (cursoInicial) {
      apagarCurso(cursoInicial.id);
    }
    reloadPageAndCloseModal();
  };

  return (
    <Modal open={show} onClose={handleClose}>
      <Fade in={show}>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          className="modal-criar-curso"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "350px",
            backgroundColor: "white",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
            borderRadius: "8px",
            padding: "20px",
          }}
        >
          <Stack spacing={1.5}>
            <Typography variant="h5" style={{ fontFamily: "Lato, sans-serif" }}>
              {cursoInicial ? "Editar curso" : "Criar curso"}
            </Typography>

            <InputTexto
              autoFocus={true}
              label="Nome do curso"
              name="nome"
              type="text"
              placeholder="ex. Análise e Desenvolvimento de Sistemas"
              control={control}
              rules={{ required: "O preenchimento deste campo é obrigatório." }}
              error={!!errors.nome}
              helperText={errors.nome?.message}
            />

            <InputTexto
              label="Sigla (opcional)"
              name="sigla"
              type="text"
              placeholder="ex. ADS"
              control={control}
            />

            <AutocompleteRHF
              defaultProps={defaultCampi}
              key={"campus_id" + resetCount}
              label="Campus"
              control={control}
              name="campus_id"
              id="campus_id"
              rules={{ required: "Selecione um campus." }}
              error={!!errors.campus_id}
              helperText={errors.campus_id?.message}
            />

            <AutocompleteRHF
              defaultProps={defaultTurnos}
              key={"turno_id" + resetCount}
              label="Turno"
              control={control}
              name="turno_id"
              id="turno_id"
              rules={{ required: "Selecione um turno." }}
              error={!!errors.turno_id}
              helperText={errors.turno_id?.message}
            />

            <Grid style={{ display: "flex", justifyContent: "space-between" }}>
              <Button onClick={handleReset} variant="outlined" type="reset">
                Cancelar
              </Button>
              {cursoInicial && (
                <Button
                  onClick={handleDelete}
                  variant="contained"
                  color="secondary"
                  sx={{ backgroundColor: "#F15757" }}
                >
                  Excluir
                </Button>
              )}

              <Button variant="contained" type="submit">
                Salvar
              </Button>
            </Grid>
          </Stack>
        </Box>
      </Fade>
    </Modal>
  );
};

export default CursoModal;
