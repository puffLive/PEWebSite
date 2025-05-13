import axios from "axios";

import { PE_API_BASE_URL } from "../config/config";

export async function getBlogPosts() {
  try {
    return await axios.get(`${PE_API_BASE_URL}api/v1/blogposts`).then((res) => {
      return res.data.data.data;
    });
  } catch (error) {
    console.log("getBlogPosts error: ", error);
    throw new Error("Blog posts could not be loaded");
  }
}

export async function getBlogPost(slug) {
  try {
    const response = await axios.get(
      `${PE_API_BASE_URL}api/v1/blogposts/${slug}`
    );
    return response.data.data.data;
  } catch (error) {
    console.log("getBlogPost error");
    console.error(error);
    throw new Error("Blog post not found");
  }
}
