import { useState } from "react";
import { CriarCursoModal } from "@comp/form/CriarCurso";

const Curso = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <h1>Curso</h1>
      <button onClick={() => setIsModalOpen(true)}>Criar curso</button>
      <CriarCursoModal show={isModalOpen} handleClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Curso;


