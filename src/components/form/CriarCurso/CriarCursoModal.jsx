import { useState } from "react";
import { Modal, TextField, Select, MenuItem, Fade } from "@mui/material";
import { Button } from "@mui/material";

// eslint-disable-next-line react/prop-types
const CriarCursoModal = ({ show, handleClose }) => {
  const [nomeCurso, setNomeCurso] = useState("");
  const [campus, setCampus] = useState("");
  const [turno, setTurno] = useState("");
  const [instituicao, setInstituicao] = useState("");

  const handleSaveCurso = () => {
    handleClose();
  };

  const handleCancelCurso = () => {
    setNomeCurso("");
    setCampus("");
    setTurno("");
    setInstituicao("");
    handleClose();
  };

  return (
    <Modal open={show} onClose={handleClose}>
      <Fade in={show}>
        <div
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
          <TextField
            label="Nome do curso"
            value={nomeCurso}
            onChange={(e) => setNomeCurso(e.target.value)}
            required
            fullWidth
            style={{ marginBottom: "15px" }}
          />
          <Select
            label="Campus"
            value={campus}
            onChange={(e) => setCampus(e.target.value)}
            required
            fullWidth
            style={{ marginBottom: "15px", color: "#000000" }}
            MenuComponent={MenuWithTransition}
          >
            <MenuItem value="MT">MT</MenuItem>
            <MenuItem value="CG">CG</MenuItem>
          </Select>

          <Select
            label="Turno"
            value={turno}
            onChange={(e) => setTurno(e.target.value)}
            fullWidth
            style={{ marginBottom: "15px", color: "#000000" }}
          >
            <MenuItem value="Matutino">Matutino</MenuItem>
            <MenuItem value="Vespertino">Vespertino</MenuItem>
            <MenuItem value="Noturno">Noturno</MenuItem>
          </Select>
          <Select
            label="Instituição"
            value={instituicao}
            onChange={(e) => setInstituicao(e.target.value)}
            fullWidth
            style={{ marginBottom: "20px" }}
          >
            <MenuItem value="UFPB">UFPB</MenuItem>
            <MenuItem value="UFRN">UFRN</MenuItem>
            <MenuItem value="UFCG">UFCG</MenuItem>
          </Select>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              onClick={handleCancelCurso}
              variant="outlined"
              style={{ color: "#6357F1", borderRadius: "20px"  }}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveCurso}
              style={{ backgroundColor: "#6357F1", color: "#fff", borderRadius: "20px" }}
            >
              Salvar
            </Button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

const MenuWithTransition = (props) => (
  <Fade {...props} timeout={{ enter: 300, exit: 0 }} />
);

export default CriarCursoModal;
