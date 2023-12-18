import supabase from "@services/supabase";

const TABLE_NAME = "campus";
const KEY = "id";

export async function getCampi() {
  const { data: campi, error } = await supabase.from(TABLE_NAME).select("*");
  if (error) {
    throw error;
  }
  return campi;
}

export async function getCampiInstituicao() {
  const { data: campi, error } = await supabase
    .from(TABLE_NAME)
    .select("*, instituicao(nome, sigla)");
  if (error) {
    throw error;
  }
  return campi;
}
