import axios from "axios";

import { PE_API_BASE_URL } from "../config/config";

export async function getMembers() {
  try {
    return await axios.get(`${PE_API_BASE_URL}api/v1/members`).then((res) => {
      return res.data.data.data;
    });
  } catch (error) {
    console.log("getMembers error: ", error);
    throw new Error("Members could not be loaded");
  }
}
