import { useQuery } from "@tanstack/react-query";
import { getBlogPost } from "../services/apiBlogPosts";
import { useParams } from "react-router-dom";

export function useBlogPost() {
  const { slug } = useParams();

  const {
    isLoading,
    data: blogPost,
    error,
  } = useQuery({
    queryKey: ["blogPost", slug],
    queryFn: () => getBlogPost(slug),
  });

  return { isLoading, error, blogPost };
}
