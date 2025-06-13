import { useQuery } from "@tanstack/react-query";
import { checkAuth } from "../services/apiMembers";

export function useCheckAuth() {
  const {
    isLoading,
    data: member,
    error,
  } = useQuery({
    queryKey: ["member"],
    queryFn: checkAuth,
    initialData: () => {
      // Check sessionStorage first
      const storedMember = sessionStorage.getItem("member");
      if (storedMember) {
        return JSON.parse(storedMember);
      }
      return null;
    },
    staleTime: 30 * 1000, // Consider data fresh for 30 seconds
    retry: 2, // Retry failed requests twice
  });

  return { isLoading, error, member };
}
