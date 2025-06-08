import { useMutation } from "@tanstack/react-query";
import { updateMember as updateMemberApi } from "../services/apiMembers";

export function useUpdateMember() {
  const { mutateAsync: updateMember } = useMutation({
    mutationFn: (data) => {
      console.log("Member Data ~ updateMember: ", data);
      return updateMemberApi(data);
    },
  });

  return { updateMember };
}
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
