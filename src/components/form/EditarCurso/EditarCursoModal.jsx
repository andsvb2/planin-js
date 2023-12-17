
import React, { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import supabase from '@api/supabase.js';

// eslint-disable-next-line react/prop-types
const EditarCursoModal = ({ show, handleClose, cursoId }) => {
  const [cursoSelecionado, setCursoSelecionado] = useState('');
  const [siglaSelecionada, setSiglaSelecionada] = useState('');
  const [campusSelecionado, setCampusSelecionado] = useState('');
  const [turnoSelecionado, setTurnoSelecionado] = useState('');
  const [instituicaoSelecionada, setInstituicaoSelecionada] = useState('');

  const [cursos, setCursos] = useState([]);
  const [turnos, setTurnos] = useState([]);
  const [instituicoes, setInstituicoes] = useState([]);
  const [campi, setCampi] = useState([]);

  async function getCurso() {
    let { data: curso, error } = await supabase.from('curso').select('*').eq('id', cursoId);

    if (!error && curso.length) {
      const cursoData = curso[0];
      setCursoSelecionado(cursoData.nome);
      setSiglaSelecionada(cursoData.sigla);
      setCampusSelecionado(cursoData.campus_id);
      setTurnoSelecionado(cursoData.turno_id);
    } else {
      alert('Erro ao buscar o curso');
    }
  }

  async function getCursos() {
    let { data: curso, error } = await supabase.from('curso').select('*');

    if (!error) {
      setCursos(curso);
    } else {
      alert('Erro ao buscar os cursos');
    }
  }

  async function getTurnos() {
    let { data: turno, error } = await supabase.from('turno').select('*');
    if (!error) {
      setTurnos(turno);
    } else {
      alert('Erro ao buscar os turnos');
    }
  }

  async function getInstituicoes() {
    let { data: instituicao, error } = await supabase.from('instituicao').select('*');

    if (!error) {
      setInstituicoes(instituicao);
    } else {
      alert('Erro ao buscar as instituições');
    }
  }

  async function getCampi() {
    let { data: campus, error } = await supabase.from('campus').select('*');

    if (!error) {
      setCampi(campus);
    } else {
      alert('Erro ao buscar os campi');
    }
  }

  useEffect(() => {
    if (cursoId) {
      getCurso();
    }
    getCursos();
    getTurnos();
    getInstituicoes();
    getCampi();
  }, [cursoId]);

  async function updateCurso() {
    let { data: curso, error } = await supabase.from('curso').update({
      nome: cursoSelecionado,
      sigla: siglaSelecionada,
      campus_id: campusSelecionado,
      turno_id: turnoSelecionado,
    }).eq('id', cursoId);

    if (!error) {
      alert('Curso atualizado com sucesso!');
    } else {
      alert('Erro ao atualizar o curso');
    }
  }

  const handleUpdateCurso = () => {
    updateCurso();
    handleClose();
  };

  const handleCancelCurso = () => {
    setCursoSelecionado('');
    setSiglaSelecionada('');
    setCampusSelecionado('');
    setTurnoSelecionado('');
    setInstituicaoSelecionada('');
    handleClose();
  };

  
  return (
    <Modal open={show} onClose={handleClose}>
      <Fade in={show}>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '350px',
            backgroundColor: 'white',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
            borderRadius: '8px',
            padding: '20px',
          }}
        >
          <h2
            style={{
              fontSize: '24px',
              color: '#6357F1',
              marginBottom: '15px',
              fontFamily: 'Lato, sans-serif',
            }}
          >
            Editar curso
          </h2>
          <TextField
            label="Nome do curso"
            value={cursoSelecionado}
            onChange={(e) => setCursoSelecionado(e.target.value)}
            required
            fullWidth
            style={{ marginBottom: '15px' }}
          />

          <TextField
            label="Sigla (opcional)"
            value={siglaSelecionada}
            onChange={(e) => setSiglaSelecionada(e.target.value)}
            fullWidth
            style={{ marginBottom: '15px' }}
          />

          <Select
            label="Campus"
            value={campusSelecionado}
            onChange={(e) => setCampusSelecionado(e.target.value)}
            required
            fullWidth
            style={{ marginBottom: '15px', color: '#000000' }}
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
            style={{ marginBottom: '15px', color: '#000000' }}
          >
            {turnos.map((turno) => (
              <MenuItem key={turno.id} value={turno.id}>
                {turno.turno}
              </MenuItem>
            ))}
          </Select>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              onClick={handleCancelCurso}
              variant="outlined"
              style={{ color: '#6357F1', borderRadius: '20px' }}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleUpdateCurso}
              style={{
                backgroundColor: '#6357F1',
                color: '#fff',
                borderRadius: '20px',
              }}
            >
              Salvar
            </Button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default EditarCursoModal;
