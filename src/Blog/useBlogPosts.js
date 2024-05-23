import { useQuery } from "@tanstack/react-query";
import { getBlogPosts } from "../services/apiBlogPosts";

export function useBlogPosts() {
  const {
    isLoading,
    data: blogPosts,
    error,
  } = useQuery({
    queryKey: ["blogPosts"],
    queryFn: getBlogPosts,
  });

  console.log(`Blog Posts - useBlogPosts: `, blogPosts);
  console.log("Error - useBlogPosts: ", error);

  return { isLoading, error, blogPosts };
}
