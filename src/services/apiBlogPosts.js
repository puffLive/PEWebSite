import supabase from "./supabase";

export async function getBlogPosts() {
  const { data, error } = await supabase
    .from("blog-posts")
    .select(`*, author("name", "avatarUrl")`);

  if (error) {
    console.log("getBlogPosts error: ", error);
    throw new Error("Blog posts could not be loaded");
  }

  console.log(`Data - getBlogPosts: `, data);

  return data;
}

// Former code
// export async function getBlogPosts() {
//   const { data, error } = await supabase.from("blog-posts").select("*");

//   if (error) {
//     console.log(error);
//     throw new Error("Blog posts could not be loaded");
//   }

//   return data;
// }

export async function getBlogPost(id) {
  const { data, error } = await supabase
    .from("blog-posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.log("getBlogPost error");
    console.error(error);
    throw new Error("Blog post not found");
  }

  return data;
}
