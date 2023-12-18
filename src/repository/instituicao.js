import supabase from "@supabase/supabase-js";

const TABLE_NAME = "instituicao";
const KEY = "id";

export async function getCampi() {
  const { data: instituicao, error } = await supabase
    .from(TABLE_NAME)
    .select("*");
  if (error) {
    throw error;
  }
  return instituicao;
}
