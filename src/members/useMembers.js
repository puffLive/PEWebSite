import { useQuery } from "@tanstack/react-query";
import { getMembers } from "../services/apiMembers";

export function useMembers() {
  const {
    isLoading,
    data: members,
    error,
  } = useQuery({
    queryKey: ["members"],
    queryFn: getMembers,
  });

  return { isLoading, error, members };
}
