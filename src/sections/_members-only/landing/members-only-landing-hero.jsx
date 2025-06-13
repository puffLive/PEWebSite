import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";

import { useBoolean } from "../../../hooks/use-boolean";
import { useResponsive } from "../../../hooks/use-responsive";

import { fShortenNumber } from "../../../utils/format-number";

import { _mock } from "../../../_mock";
import { bgGradient } from "../../../theme/css";
import MembersOnlyHeroIllustration from "../../../assets/data/illustrations/members-only-hero-illustration";

import Iconify from "../../../components/iconify";
import { PlayerDialog } from "../../../components/player";

// ----------------------------------------------------------------------

const SUMMARY = [
  { value: 14000, label: "Learners", color: "warning" },
  { value: 1050, label: "Courses", color: "error" },
  { value: 59000, label: "Graduates", color: "success" },
];

// ----------------------------------------------------------------------

export default function MembersOnlyLandingHero() {
  const theme = useTheme();

  const mdUp = useResponsive("up", "md");

  const videoOpen = useBoolean();

  return (
    <>
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
          <Grid container spacing={3}>
            <Grid xs={12} md={6} lg={5}>
              <Stack
                sx={{
                  textAlign: { xs: "center", md: "unset" },
                }}
              >
                <Typography variant="h1">
                  Where members learn, grow and thrive.
                </Typography>

                <Typography sx={{ color: "text.secondary", mt: 3, mb: 5 }}>
                  Welcome PE family! We are excited to have you here. This is
                  where we share knowledge and resources to help us all grow and
                  succeed.
                </Typography>

                <Stack
                  spacing={3}
                  alignItems="center"
                  direction={{ xs: "column", md: "row" }}
                >
                  {/* <Button color="inherit" size="large" variant="contained">
                    Ready Start
                  </Button> */}

                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{ typography: "h6" }}
                  >
                    <Fab
                      size="medium"
                      color="info"
                      onClick={videoOpen.onTrue}
                      sx={{ mr: 1 }}
                    >
                      <Iconify width={24} icon="carbon:play" />
                    </Fab>
                    Clip of us in the field
                  </Stack>
                </Stack>
              </Stack>
            </Grid>

            {mdUp && (
              <Grid xs={12} md={6} lg={7}>
                <MembersOnlyHeroIllustration />
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>

      <PlayerDialog
        open={videoOpen.value}
        onClose={videoOpen.onFalse}
        videoPath={
          "https://principleevolution.s3.us-east-2.amazonaws.com/videos/PE+In+The+Field.mp4"
        }
        controls={true} // Add video player controls
      />
    </>
  );
}
