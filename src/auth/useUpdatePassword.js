import { useMutation } from "@tanstack/react-query";
import { updatePassword as updatePasswordApi } from "../services/apiAuth";

export function useUpdatePassword() {
  const { mutateAsync: updatePassword } = useMutation({
    mutationFn: ({ passwordCurrent, password, passwordConfirm }) => {
      return updatePassbwordApi(passwordCurrent, password, passwordConfirm);
    },
  });

  return { updatePassword };
}
