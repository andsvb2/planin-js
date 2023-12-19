import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import { apagarCurso, atualizarCurso, criarCurso } from "@repository/curso.js";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { InputTexto } from "@comp/form/InputTexto";

const EditarCursoModal = ({ show, handleClose, curso, ...rest }) => {
  const defaultValues = {
    id: curso ? curso.id : "",
    nome: curso ? curso.nome : "",
    sigla: curso ? curso.sigla : "",
    campus_id: curso ? curso.campus_id : "",
    turno_id: curso ? curso.turno_id : "",
  };

  console.log("ECM -> defaultValues: ", defaultValues);

  const [name, setName] = useState(defaultValues.nome);

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

  function reloadPageAndCloseModal() {
    window.location.reload();
    handleClose();
  }

  const onSubmit = async (values) => {
    if (curso) {
      // Create a new object based on the `curso` object.
      const cursoAtualizado = { ...curso };

      // Iterate over `values`
      Object.entries(values).forEach(([key, value]) => {
        // If `value` is not empty, add it to 'cursoAtualizado'
        if (value) {
          cursoAtualizado[key] = value;
        }
      });

      console.log("cursoAtualizado: ", cursoAtualizado);
      await atualizarCurso(cursoAtualizado);
    } else {
      const curso = { ...values };
      await criarCurso(curso);
    }
  };

  const handleModalClose = () => {
    handleReset();
  };

  const handleReset = () => {
    reset({
      id: "",
      nome: "",
      sigla: "",
      turno_id: "",
      campus_id: "",
    });
    handleClose();
  };

  const handleDelete = async () => {
    if (curso) {
      await apagarCurso(curso.id);
    }
    reloadPageAndCloseModal();
  };

  return (
    <Modal open={show} onClose={handleModalClose}>
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
            {curso ? "Editar curso" : "Criar curso"}
          </Typography>

          <InputTexto
            autoFocus={true}
            label="Nome do curso"
            name="nome"
            type="text"
            control={control}
            rules={{ required: "O preenchimento deste campo é obrigatório." }}
            error={!!errors.nome}
            helperText={errors.nome?.message}
            defaultValue={name}
          />

          <InputTexto
            label="Sigla (opcional)"
            name="sigla"
            type="text"
            control={control}
          />

          <Grid style={{ display: "flex", justifyContent: "space-between" }}>
            <Button onClick={handleReset} variant="outlined" type="reset">
              Cancelar
            </Button>
            <Button
              onClick={handleDelete}
              variant="contained"
              color="secondary"
              sx={{ backgroundColor: "#F15757" }}
            >
              Excluir
            </Button>

            <Button variant="contained" type="submit">
              Salvar
            </Button>
          </Grid>
        </Stack>
      </Box>
    </Modal>
  );
};

export default EditarCursoModal;
