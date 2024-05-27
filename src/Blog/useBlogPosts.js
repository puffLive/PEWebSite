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

  return { isLoading, error, blogPosts };
}
