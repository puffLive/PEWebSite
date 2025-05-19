import axios from "axios";

import { PE_API_BASE_URL } from "../config/config";

export async function login(email, password) {
  try {
    return await axios
      .post(`${PE_API_BASE_URL}api/v1/members/login`, {
        email,
        password,
      })
      .then((res) => {
        console.log("login res: ", res.data);
        return res.data;
      });
  } catch (error) {
    console.log("signIn error: ", error);
    return error.response.data;
  }
}
