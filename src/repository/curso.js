import supabase from "@services/supabase.js";

const TABLE_NAME = "curso";
const KEY = "id";

export async function getCursoById(id) {
  const { data: curso, error } = await supabase
    .from(TABLE_NAME)
    .select("*")
    .eq(KEY, id);
  if (error) {
    throw error;
  }
  return curso;
}

export async function getTodosCursos() {
  const { data: curso, error } = await supabase.from(TABLE_NAME).select("*");
  if (error) {
    throw error;
  }
  return curso;
}

// export async function criarCurso(nome, campus_id, turno_id, sigla) {
//   let { data: curso, error } = await supabase.from(TABLE_NAME).insert([
//     {
//       nome: nome,
//       sigla: sigla,
//       campus_id: campus_id,
//       turno_id: turno_id,
//     },
//   ]);
// }

export async function criarCurso(curso) {
  let { data, error } = await supabase.from(TABLE_NAME).insert(curso);
}

export async function updateCurso(curso) {
  const { data, error } = await supabase
    .from("curso")
    .update(curso)
    .eq("id", curso.id)
    .select();
}
