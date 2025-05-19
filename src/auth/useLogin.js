import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../services/apiAuth";

export function useLogin() {
  const { mutateAsync: login } = useMutation({
    mutationFn: ({ email, password }) => {
      return loginApi(email, password);
    },
  });

  return { login };
}
