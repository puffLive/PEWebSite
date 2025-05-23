import { useForm } from "react-hook-form";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LoadingButton from "@mui/lab/LoadingButton";
import InputAdornment from "@mui/material/InputAdornment";

import { useBoolean } from "../../../hooks/use-boolean";

import Iconify from "../../../components/iconify";
import FormProvider, {
  RHFSelect,
  RHFTextField,
  RHFAutocomplete,
} from "../../../components/hook-form";

// ----------------------------------------------------------------------

// const GENDER_OPTIONS = ["Male", "Female", "Other"];

// ----------------------------------------------------------------------

export default function AccountPasswordView() {
  const passwordShow = useBoolean();
  // const member = JSON.parse(sessionStorage.getItem("member"));

  const defaultValuesPW = {
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };

  const pwMethods = useForm({
    defaultValues: defaultValuesPW,
  });

  const onSubmitPW = pwMethods.handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      pwMethods.reset();
      console.log("Password DATA", data);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <FormProvider methods={pwMethods} onSubmit={onSubmitPW}>
      <Stack spacing={3} sx={{ my: 5 }}>
        <Typography variant="h5"> Change Password </Typography>

        <Stack spacing={2.5}>
          <RHFTextField
            name="oldPassword"
            label="Old Password"
            type={passwordShow.value ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={passwordShow.onToggle} edge="end">
                    <Iconify
                      icon={
                        passwordShow.value ? "carbon:view" : "carbon:view-off"
                      }
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <RHFTextField
            name="newPassword"
            label="New Password"
            type={passwordShow.value ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={passwordShow.onToggle} edge="end">
                    <Iconify
                      icon={
                        passwordShow.value ? "carbon:view" : "carbon:view-off"
                      }
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <RHFTextField
            name="confirmNewPassword"
            label="Confirm New Password"
            type={passwordShow.value ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={passwordShow.onToggle} edge="end">
                    <Iconify
                      icon={
                        passwordShow.value ? "carbon:view" : "carbon:view-off"
                      }
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Stack>
      <Box sx={{ textAlign: "right" }}>
        <LoadingButton
          color="inherit"
          size="medium"
          type="submit"
          variant="contained"
          loading={pwMethods.formState.isSubmitting}
        >
          Save Changes
        </LoadingButton>
      </Box>
    </FormProvider>
  );
}
