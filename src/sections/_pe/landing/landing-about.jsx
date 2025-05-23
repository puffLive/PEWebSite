import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import { fShortenNumber } from "../../../utils/format-number";

import Image from "../../../components/image";
import Iconify from "../../../components/iconify";

// ----------------------------------------------------------------------

const ROWS = [
  {
    label: "projects",
    total: 40,
    content:
      "Our team has been involved in various projects from fix and flips to fix and holds, and wholesale deals",
  },
  {
    label: "years of experience",
    total: 20,
    content: "Our team has over 20 years of experience in real estate",
  },
  {
    label: "years in USA",
    total: 15,
    content:
      "Our team has been through the ups and downs learning to invest accross the boarder",
  },
];

// ----------------------------------------------------------------------

export default function LandingAbout() {
  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Image
        alt="landing about"
        src="/about/community.png"
        ratio="16/9"
        sx={{
          borderRadius: 1.5,
          mb: { xs: 5, md: 10 },
        }}
      />

      <Grid
        container
        columnSpacing={{ xs: 0, md: 3 }}
        rowSpacing={{ xs: 5, md: 0 }}
        justifyContent="space-between"
      >
        <Grid
          xs={12}
          md={5}
          sx={{
            textAlign: { xs: "center", md: "right" },
          }}
        >
          <Typography
            component="div"
            variant="overline"
            sx={{ color: "text.disabled" }}
          >
            About us
          </Typography>

          <Typography variant="h2" sx={{ my: 3 }}>
            Who We Are
          </Typography>

          <Typography sx={{ color: "text.secondary" }}>
            We are a group of friends that decided to take the unbeaten path
            towards weath and proserity for our families, and our community. We
            came together to support each other on this journey, and without
            this support we would not have been able to accomplish what
            we&apos;ve accomplished so far. Now we are makeing time to build a
            community of like minded individuals to accomplish something our
            ancestors would be proud of.
          </Typography>

          {/* <Button
            size="large"
            color="inherit"
            endIcon={<Iconify icon="carbon:chevron-right" />}
            sx={{ my: 5 }}
          >
            Learn more
          </Button> */}
        </Grid>

        <Grid xs={12} md={6}>
          <Stack spacing={5}>
            {ROWS.map((row) => (
              <Stack
                key={row.label}
                direction="row"
                alignItems="center"
                divider={
                  <Divider
                    flexItem
                    orientation="vertical"
                    sx={{ ml: 3, mr: 5, borderStyle: "dashed" }}
                  />
                }
              >
                <Stack spacing={1} sx={{ width: 1, maxWidth: 100 }}>
                  <Stack direction="row">
                    <Typography variant="h2">
                      {fShortenNumber(row.total)}
                    </Typography>
                    <Box
                      component="span"
                      sx={{ color: "primary.main", typography: "h4" }}
                    >
                      +
                    </Box>
                  </Stack>

                  <Typography
                    variant="overline"
                    sx={{ color: "text.disabled" }}
                  >
                    {row.label}
                  </Typography>
                </Stack>

                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {row.content}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
