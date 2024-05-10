import supabase from "./supabase";

export async function getMembers() {
  const { data, error } = await supabase.from("members").select("*");

  if (error) {
    console.log(error);
    throw new Error("Members could not be loaded");
  }

  return data;
}
