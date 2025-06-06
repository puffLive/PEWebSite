import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signUpMember as signUpMemberApi } from "../services/apiMembers";

export function useSignUpMember() {
  const queryClient = useQueryClient();

  const { mutate, isLoading, error } = useMutation({
    mutationFn: signUpMemberApi,
    onSuccess: (newMember) => {
      // Also invalidate any existing member queries to trigger a refetch
      queryClient.invalidateQueries({ queryKey: ["member"] });
      // After successful signup, add the new member data to the cache
      queryClient.setQueryData(["member"], newMember);
      return newMember;
    },
    onError: (error) => {
      // Handle signup errors
      console.error("Signup failed:", error);
      throw error;
    },
  });

  return { mutate, isLoading, error };
}
