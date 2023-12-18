import supabase from "@supabase/supabase-js";

const TABLE_NAME = "campus";
const KEY = "id";

export async function getCampi() {
  const { data: campi, error } = await supabase.from(TABLE_NAME).select("*");
  if (error) {
    throw error;
  }
  return campi;
}
