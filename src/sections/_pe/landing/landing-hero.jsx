import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";

import { HashLink } from "react-router-hash-link";

import { useResponsive } from "../../../hooks/use-responsive";

import { bgGradient } from "../../../theme/css";

import Image from "../../../components/image";
import Iconify from "../../../components/iconify";

// ----------------------------------------------------------------------

export default function LandingHero() {
  const theme = useTheme();

  const mdUp = useResponsive("up", "md");

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: "/assets/background/overlay_1.jpg",
        }),
        overflow: "hidden",
      }}
    >
      <Container
        sx={{
          py: 15,
          display: { md: "flex" },
          alignItems: { md: "center" },
          height: { md: `100vh` },
        }}
      >
        <Grid container columnSpacing={{ xs: 0, md: 10 }}>
          <Grid
            xs={12}
            md={6}
            lg={5}
            sx={{
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography variant="overline" sx={{ color: "secondary.main" }}>
              Principle Evolution
            </Typography>

            <Typography variant="h1" sx={{ my: 3 }}>
              Anything is possible with a community
            </Typography>

            <Typography sx={{ color: "text.secondary" }}>
              Our vision is to build a strong community that we are able to
              build, invest and grow with.
            </Typography>

            <Stack
              spacing={3}
              direction={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "center", md: "unset" }}
              justifyContent={{ xs: "center", md: "unset" }}
              sx={{
                mt: 5,
              }}
            >
              <Button
                component={HashLink}
                variant="contained"
                color="inherit"
                size="large"
                to="#join"
                smooth
              >
                Join the community
              </Button>

              <Stack
                direction="row"
                alignItems="center"
                sx={{ typography: "h6" }}
              >
                {/* <Fab size="medium" sx={{ mr: 1 }}>
                  <Iconify width={24} icon="carbon:play" />
                </Fab>
                See Our Work */}
              </Stack>
            </Stack>
          </Grid>

          {mdUp && (
            <Grid xs={12} md={6} lg={7}>
              <Image
                visibleByDefault
                disabledEffect
                alt="illustration of a construction worker"
                src="/assets/illustrations/illustration_marketing_market.png"
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
