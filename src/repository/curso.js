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
