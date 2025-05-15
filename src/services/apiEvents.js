import axios from "axios";

import { PE_API_BASE_URL } from "../config/config";

export async function getEvents() {
  try {
    return await axios.get(`${PE_API_BASE_URL}api/v1/events`).then((res) => {
      return res.data.data.data;
    });
  } catch (error) {
    console.log("getEvents error: ", error);
    throw new Error("Events could not be loaded");
  }
}

// export async function getEvent(id) {
//   const { data, error } = await supabase
//     .from("events")
//     .select("*")
//     .eq("id", id)
//     .single();

//   if (error) {
//     console.log("getEvent error");
//     console.error(error);
//     throw new Error("Event not found");
//   }

//   return data;
// }

export async function getEvent(id) {
  try {
    const response = await axios.get(`${PE_API_BASE_URL}api/v1/events/${id}`);
    return response.data.data.data;
  } catch (error) {
    console.log("getEvent error");
    console.error(error);
    throw new Error("Event not found");
  }
}
