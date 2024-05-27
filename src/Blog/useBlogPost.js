import { useQuery } from "@tanstack/react-query";
import { getBlogPost } from "../services/apiBlogPosts";
import { useParams } from "react-router-dom";

export function useBlogPost() {
  const { blogId } = useParams();

  const {
    isLoading,
    data: blogPost,
    error,
  } = useQuery({
    queryKey: ["blogPost", blogId],
    queryFn: () => getBlogPost(blogId),
  });

  return { isLoading, error, blogPost };
}
