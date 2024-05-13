import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import { inputBaseClasses } from "@mui/material/InputBase";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { alpha, styled, useTheme } from "@mui/material/styles";

import { bgGradient } from "../../../theme/css";

import Iconify from "../../../components/iconify";

import { useForm } from "@formspree/react";

// ----------------------------------------------------------------------

const StyledInput = styled((props) => <TextField fullWidth {...props} />)(
  ({ theme }) => ({
    [`& .${inputBaseClasses.input}`]: {
      color: theme.palette.common.white,
    },
    [`& .${inputLabelClasses.root}.${inputLabelClasses.shrink}`]: {
      color: theme.palette.grey[500],
      [`&.${inputLabelClasses.focused}`]: {
        color: theme.palette.grey[500],
      },
    },
  })
);

StyledInput.propTypes = {
  theme: PropTypes.shape({
    palette: PropTypes.shape({
      common: PropTypes.shape({
        white: PropTypes.string,
      }),
      grey: PropTypes.string,
    }),
  }),
};

// ----------------------------------------------------------------------

export default function LandingFreeSEO() {
  const theme = useTheme();
  const [state, handleSubmit, reset] = useForm("mjvnlgyr");
  let formSubmitted = false;
  if (state.succeeded) {
    formSubmitted = true;
  }
  const resetForm = function () {
    reset();
    formSubmitted = false;
  };

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0),
          imgUrl: "/assets/images/marketing/marketing_get_free_seo.jpg",
        }),
        overflow: "hidden",
        py: { xs: 10, md: 15 },
      }}
      id="join"
    >
      <Container>
        <Grid
          container
          spacing={{
            xs: 5,
            md: 3,
          }}
          justifyContent="space-between"
        >
          <Grid xs={12} md={5}>
            <Typography
              variant="h1"
              component="h2"
              sx={{
                color: "primary.main",
                mb: { xs: 3, md: 8 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Join our
              <br /> Community
            </Typography>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={{ xs: "center", md: "flex-start" }}
              sx={{ color: "common.white", mb: 2 }}
            >
              <Iconify icon="carbon:email" width={24} sx={{ mr: 2 }} />

              <Link color="inherit" href="mailto:hello@example.com">
                PrincipleEvolution@gmail.com
              </Link>
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={{ xs: "center", md: "flex-start" }}
              sx={{ color: "common.white" }}
            >
              <Iconify icon="carbon:location" width={24} sx={{ mr: 2 }} />
              11811 Shaker Blvd, STE 204-160, Cleveland Ohio 44120
            </Stack>
          </Grid>

          <Grid xs={12} md={5}>
            {formSubmitted ? (
              <>
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{
                    color: "primary.main",
                    mb: { xs: 3, md: 8 },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Thank you... <br />
                  We&apos;ll be in touch
                </Typography>
                <Button
                  type="submit"
                  size="medium"
                  variant="contained"
                  color="primary"
                  onClick={resetForm}
                >
                  Reset form
                </Button>
              </>
            ) : (
              <Stack alignItems={{ xs: "center", md: "flex-start" }}>
                <form onSubmit={handleSubmit}>
                  <StyledInput name="name" label="Name" sx={{ mb: 2.5 }} />

                  <StyledInput name="email" label="Email" sx={{ mb: 2.5 }} />

                  <StyledInput name="phone" label="Phone" sx={{ mb: 2.5 }} />

                  <StyledInput
                    name="skill"
                    label="What skill or expertise do you bring?"
                    sx={{ mb: 5 }}
                  />

                  <Button
                    type="submit"
                    size="large"
                    variant="contained"
                    color="primary"
                  >
                    Send Request
                  </Button>
                </form>
              </Stack>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
