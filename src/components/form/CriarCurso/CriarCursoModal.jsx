import { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import { useForm } from "react-hook-form";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import supabase from "@services/supabase.js";
import { criarCurso } from "@repository/curso.js";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { InputTexto } from "@comp/form/InputTexto";

// eslint-disable-next-line react/prop-types
const CriarCursoModal = ({ show, handleClose }) => {
  const defaultValues = {
    nomeCurso: "",
    campus: "",
    turno: "",
    sigla: "",
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

  const [cursoSelecionado, setCursoSelecionado] = useState("");
  const [siglaSelecionada, setSiglaSelecionada] = useState("");
  const [campusSelecionado, setCampusSelecionado] = useState([]);
  const [turnoSelecionado, setTurnoSelecionado] = useState("");
  const [instituicaoSelecionada, setInstituicaoSelecionada] = useState("");

  const [cursos, setCursos] = useState([]);
  const [turnos, setTurnos] = useState([]);
  const [instituicoes, setInstituicoes] = useState([]);
  const [campi, setCampi] = useState([]);

  async function getCursos() {
    let { data: curso, error } = await supabase.from("curso").select("*");

    if (!error) {
      setCursos(curso);
    } else {
      alert("Erro ao buscar os cursos");
    }
  }

  async function getTurnos() {
    let { data: turno, error } = await supabase.from("turno").select("*");
    if (!error) {
      setTurnos(turno);
    } else {
      alert("Erro ao buscar os turnos");
    }
  }

  async function getInstituicoes() {
    let { data: instituicao, error } = await supabase
      .from("instituicao")
      .select("*");

    if (!error) {
      setInstituicoes(instituicao);
    } else {
      alert("Erro ao buscar as instituições");
    }
  }

  async function getCampi() {
    let { data: campus, error } = await supabase.from("campus").select("*");

    if (!error) {
      setCampi(campus);
    } else {
      alert("Erro ao buscar os campi");
    }
  }

  useEffect(() => {
    getCursos();
    getTurnos();
    getInstituicoes();
    getCampi();
  }, []);

  const onSubmit = () => {
    const curso = {
      nome: cursoSelecionado,
      campus_id: campusSelecionado,
      turno_id: turnoSelecionado,
      sigla: siglaSelecionada,
    };

    criarCurso(curso);

    // criarCurso(
    //   cursoSelecionado,
    //   campusSelecionado,
    //   turnoSelecionado,
    //   siglaSelecionada,
    // );
    window.location.reload();
    handleClose();
  };

  const handleReset = () => {
    reset(defaultValues);
    handleClose();
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
          <Stack spacing={1}>
            <h2
              style={{
                fontSize: "24px",
                color: "#6357F1",
                marginBottom: "15px",
                fontFamily: "Lato, sans-serif",
              }}
            >
              Criar curso
            </h2>
            <InputTexto
              autoFocus={true}
              label="Nome do curso"
              name="nomeCurso"
              type="text"
              placeholder="ex. Análise e Desenvolvimento de Sistemas"
              control={control}
              rules={{ required: "O preenchimento deste campo é obrigatório." }}
              error={!!errors.nomeCurso}
              helperText={errors.nomeCurso?.message}
            />

            <InputTexto
              label="Sigla (opcional)"
              name="sigla"
              type="text"
              placeholder="ex. ADS"
              control={control}
            />

            <Select
              label="Campus"
              value={campusSelecionado}
              onChange={(e) => setCampusSelecionado(e.target.value)}
              required
              fullWidth
              style={{ marginBottom: "15px", color: "#000000" }}
              MenuComponent={MenuWithTransition}
            >
              {campi.map((campus) => (
                <MenuItem key={campus.id} value={campus.id}>
                  {campus.sigla} - {campus.nome}
                </MenuItem>
              ))}
            </Select>

            <Select
              label="Turno"
              value={turnoSelecionado}
              onChange={(e) => setTurnoSelecionado(e.target.value)}
              fullWidth
              style={{ marginBottom: "15px", color: "#000000" }}
            >
              {turnos.map((turno) => (
                <MenuItem key={turno.id} value={turno.id}>
                  {turno.turno}
                </MenuItem>
              ))}
            </Select>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                onClick={() => {
                  reset(defaultValues);
                }}
                variant="outlined"
                type="reset"
                style={{
                  color: "#6357F1",
                  backgroundColor: "#ffff",
                  borderRadius: "20px",
                }}
              >
                Cancelar
              </Button>
              <Button variant="contained" type="submit">
                Salvar
              </Button>
            </div>
          </Stack>
        </Box>
      </Fade>
    </Modal>
  );
};

const MenuWithTransition = (props) => (
  <Fade {...props} timeout={{ enter: 300, exit: 0 }} />
);

export default CriarCursoModal;
