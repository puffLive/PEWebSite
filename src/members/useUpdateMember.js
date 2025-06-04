import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMember } from "../services/apiMembers";

export function useUpdateMember() {
  const queryClient = useQueryClient();

  const { mutate, isLoading, error } = useMutation({
    mutationFn: updateMember,
    onSuccess: (updatedMember) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["member"] });
      return updatedMember;
    },
  });

  return { mutate, isLoading, error };
}
