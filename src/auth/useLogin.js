import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../services/apiAuth";

export function useLogin() {
  const queryClient = useQueryClient();

  const { mutateAsync: login } = useMutation({
    mutationFn: ({ email, password }) => {
      return loginApi(email, password);
    },
    onSuccess: (data) => {
      if (data.status === "success") {
        // Update the React Query cache with the member data
        queryClient.setQueryData(["member"], { member: data.data });
      }
    },
  });

  return { login };
}
