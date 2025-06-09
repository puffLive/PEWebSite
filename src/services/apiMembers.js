import axios from "axios";

import { PE_API_BASE_URL } from "../config/config";

export async function getMembers() {
  try {
    return await axios
      .get(`${PE_API_BASE_URL}api/v1/members/public?founder=true`)
      .then((res) => {
        return res.data.data.data;
      });
  } catch (error) {
    console.log("getMembers error: ", error);
    throw new Error("Members could not be loaded");
  }
}

/// add data to the body
export async function updateMember(data) {
  try {
    const response = await axios.patch(
      `${PE_API_BASE_URL}api/v1/members/updateMe`,
      data,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.data || !response.data.data) {
      throw new Error("Invalid response format from server");
    }

    return response.data.data.member;
  } catch (error) {
    console.error("updateMember error:", error.response?.data || error.message);
    throw new Error(
      error.response?.data?.message || "Member could not be updated"
    );
  }
}

export async function signUpMember(data) {
  try {
    return await axios
      .post(`${PE_API_BASE_URL}api/v1/members/signup`, data, {
        withCredentials: true, // This enables sending cookies with the request
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        return res.data.data.data;
      });
  } catch (error) {
    console.log("updateMember error: ", error);
    throw new Error("Member could not be updated");
  }
}
