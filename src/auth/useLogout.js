import { useMutation } from "@tanstack/react-query";
import { logout as logoutApi } from "../services/apiAuth";

export function useLogout() {
  const { mutateAsync: logout } = useMutation({
    mutationFn: () => {
      return logoutApi();
    },
  });

  return { logout };
}
