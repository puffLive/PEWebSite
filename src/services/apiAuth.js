import axios from "axios";

import { PE_API_BASE_URL } from "../config/config";

export async function login(email, password) {
  try {
    return await axios
      .post(
        `${PE_API_BASE_URL}api/v1/members/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log("login res: ", res.data);
        return res.data;
      });
  } catch (error) {
    console.log("signIn error: ", error);
    return error.response.data;
  }
}

export async function logout() {
  try {
    await axios.post(
      `${PE_API_BASE_URL}api/v1/members/logout`,
      {},
      { withCredentials: true }
    );
  } catch (error) {
    console.log("Logout error: ", error);
    return error.response.data;
  }
}

export async function updatePassword(
  passwordCurrent,
  password,
  passwordConfirm
) {
  try {
    const response = await axios.patch(
      `${PE_API_BASE_URL}api/v1/members/updateMyPassword`,
      {
        passwordCurrent,
        password,
        passwordConfirm,
      },
      {
        withCredentials: true, // This ensures the httpOnly cookie is sent
      }
    );
    console.log("Update Password res: ", response.data);
    return response.data;
  } catch (error) {
    console.log("Update Password error: ", error);
    return error.response?.data;
  }
}
