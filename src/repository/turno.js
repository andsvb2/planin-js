import supabase from "@services/supabase.js";

const TABLE_NAME = "turno";
const KEY = "id";

export async function getTurnos() {
  const { data: turno, error } = await supabase.from(TABLE_NAME).select("*");
  if (error) {
    throw error;
  }
  return turno;
}
