import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LoadingButton from "@mui/lab/LoadingButton";
import InputAdornment from "@mui/material/InputAdornment";

import { paths } from "../../../src/routes/paths";
import { RouterLink } from "../../../src/routes/components";

import { useBoolean } from "../../../src/hooks/use-boolean";

import Iconify from "../../../src/components/iconify";
import FormProvider, { RHFTextField } from "../../../src/components/hook-form";
import { Box } from "@mui/system";
import { use } from "react";
import { useLogin } from "../../auth/useLogin";
import { el } from "date-fns/locale";

// ----------------------------------------------------------------------

export default function LoginBackgroundView() {
  const passwordShow = useBoolean();
  const signInError = useBoolean(false);
  const { login } = useLogin();
  const navigate = useNavigate();
  let member = null;

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("That is not an email"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password should be of minimum 6 characters length"),
  });

  const defaultValues = {
    email: "",
    password: "",
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    signInError.onFalse();
    const response = await login({
      email: data.email,
      password: data.password,
    });
    console.log("response: ", response);
    if (response.status === "success") {
      member = response.data;
      console.log("member: ", member);
      sessionStorage.setItem("member", JSON.stringify(member));
      // sessionStorage.setItem("token", response.token);
      sessionStorage.setItem("isLoggedIn", true);
      navigate(paths.pe.home);
    }
    if (response.status === "fail") {
      console.log("Login failed");
      console.log("response: ", response);
      signInError.onTrue();
    }
    reset();
  });

  const renderHead = (
    <div>
      <Typography variant="h3" paragraph>
        Login
      </Typography>

      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        {`Don’t have an account? `}
        <Link
          component={RouterLink}
          href={paths.registerBackground} // *** need to link to the register page
          variant="subtitle2"
          color="primary"
        >
          Get started
        </Link>
      </Typography>
    </div>
  );

  const renderSocials = (
    <Stack direction="row" spacing={2}>
      <Button fullWidth size="large" color="inherit" variant="outlined">
        <Iconify icon="logos:google-icon" width={24} />
      </Button>

      <Button fullWidth size="large" color="inherit" variant="outlined">
        <Iconify
          icon="carbon:logo-facebook"
          width={24}
          sx={{ color: "#1877F2" }}
        />
      </Button>

      <Button color="inherit" fullWidth variant="outlined" size="large">
        <Iconify
          icon="carbon:logo-github"
          width={24}
          sx={{ color: "text.primary" }}
        />
      </Button>
    </Stack>
  );

  const renderForm = (
    <FormProvider methods={methods} onSubmit={onSubmit} autocomplete="off">
      <Stack spacing={2.5} alignItems="flex-end">
        <RHFTextField name="email" label="Email address" />

        <RHFTextField
          name="password"
          label="Password"
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

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2" sx={{ color: "error.main" }}>
            {signInError.value && "Invalid email or password"}
          </Typography>

          <Link
            component={RouterLink}
            href={paths.forgotPassword}
            variant="body2"
            underline="always"
            color="text.secondary"
          >
            Forgot password?
          </Link>
        </Box>

        <LoadingButton
          fullWidth
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Login
        </LoadingButton>
      </Stack>
    </FormProvider>
  );

  return (
    <Box
      sx={{
        height: "auto",
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        border: (theme) => `solid 1px ${theme.palette.divider}`,
        boxShadow: (theme) => theme.customShadows.z24,
        bgcolor: "background.paper",
        p: 4,
        maxWidth: 480,
        mx: "auto",
        my: { xs: 5, sm: 10 },
      }}
    >
      {renderHead}

      {renderForm}

      {/* <Divider>
        <Typography variant="body2" sx={{ color: "text.disabled" }}>
          or continue with
        </Typography>
      </Divider>

      {renderSocials} */}
    </Box>
  );
}
