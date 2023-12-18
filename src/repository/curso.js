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

export async function criarCurso(curso) {
  let { data, error } = await supabase.from(TABLE_NAME).insert(curso);
}

export async function atualizarCurso(curso) {
  const { data, error } = await supabase
    .from("curso")
    .update(curso)
    .eq(KEY, curso.id)
    .select();
}

export async function apagarCurso(id) {
  const { error } = await supabase.from(TABLE_NAME).delete().eq(KEY, id);
}
