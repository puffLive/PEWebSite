import supabase from "./supabase";

export async function getEvents() {
  const { data, error } = await supabase.from("events").select("*");

  if (error) {
    console.log(error);
    throw new Error("Events could not be loaded");
  }

  return data;
}

export async function getEvent(id) {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.log("getEvent error");
    console.error(error);
    throw new Error("Event not found");
  }

  return data;
}
