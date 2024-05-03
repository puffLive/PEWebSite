import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";

import SvgColor from "../../../src/components/svg-color";

import { useForm } from "@formspree/react";

// ----------------------------------------------------------------------

export default function MarketingNewsletter({ sx, ...other }) {
  const [state, handleSubmit] = useForm("xvoeladk");
  let emailSubmitted = false;
  if (state.succeeded) {
    emailSubmitted = true;
  }

  return (
    <Box sx={{ py: 8, bgcolor: "background.neutral", ...sx }} {...other}>
      <Container>
        <Stack
          spacing={3}
          alignItems="center"
          justifyContent="space-between"
          direction={{ xs: "column", md: "row" }}
        >
          <Stack
            spacing={3}
            alignItems="center"
            direction={{ xs: "column", md: "row" }}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <SvgColor
              src="/assets/icons/ic_newsletter.svg"
              sx={{ width: 80, height: 80, color: "primary.main" }}
            />

            <Stack spacing={1}>
              <Typography variant="h4">Sign Up For Newsletter</Typography>

              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Keep up to date with Principle Evolution
              </Typography>
            </Stack>
          </Stack>

          {!emailSubmitted && (
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                hiddenLabel
                placeholder="Enter your email"
                name="email"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        size="large"
                        color="inherit"
                        variant="contained"
                        sx={{
                          height: 54,
                          borderTopLeftRadius: 0,
                          borderBottomLeftRadius: 0,
                        }}
                        onClick={handleSubmit}
                      >
                        Sign Up
                      </Button>
                    </InputAdornment>
                  ),
                  sx: { pr: 0 },
                }}
                sx={{ maxWidth: 466 }}
              />
            </form>
          )}
        </Stack>
      </Container>
    </Box>
  );
}

MarketingNewsletter.propTypes = {
  sx: PropTypes.object,
};
