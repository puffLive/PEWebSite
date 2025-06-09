import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMember as updateMemberApi } from "../services/apiMembers";

export function useUpdateMember() {
  const queryClient = useQueryClient();

  const { mutate, isLoading, error } = useMutation({
    mutationFn: updateMemberApi,
    onSuccess: (updatedMember) => {
      // Also invalidate any existing member queries to trigger a refetch
      queryClient.invalidateQueries({ queryKey: ["member"] });
      // After successful update, add the updated member data to the cache
      queryClient.setQueryData(["member"], updatedMember);
      console.log("Updated Member Data ~ useUpdateMember: ", updatedMember);
      return updatedMember;
    },
    onError: (error) => {
      // Handle update errors
      console.error("Update failed:", error);
      throw error;
    },
  });

  return { mutate, isLoading, error };
}
