import { m } from "framer-motion";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import { paths } from "../../../routes/paths";
import { RouterLink } from "../../../routes/components";

import { useResponsive } from "../../../hooks/use-responsive";

import Image from "../../../components/image";
import Iconify from "../../../components/iconify";
import TextMaxLine from "../../../components/text-max-line";
import { varHover, varTranHover } from "../../../components/animate";

// ----------------------------------------------------------------------

export default function LandingCaseStudies({ events, socials }) {
  const mdUp = useResponsive("up", "md");

  return (
    <Container
      sx={{
        overflow: "hidden",
        pt: { xs: 5, md: 10 },
        pb: 10,
      }}
      id="connect"
    >
      <Stack
        spacing={3}
        sx={{
          textAlign: { xs: "center", md: "unset" },
        }}
      >
        <Typography variant="overline" sx={{ color: "text.disabled" }}>
          Our Events
        </Typography>

        <Typography variant="h2">Connect with us</Typography>
      </Stack>

      <Grid
        spacing={3}
        container
        alignItems="center"
        sx={{
          py: { xs: 8, md: 10 },
        }}
      >
        <Grid xs={6} md={2}>
          {mdUp ? (
            <SmallItem caseStudy={socials[0]} />
          ) : (
            <SmallItem caseStudy={events[0]} />
          )}
        </Grid>

        {!mdUp && (
          <Grid xs={6} md={2}>
            <SmallItem caseStudy={events[1]} />
          </Grid>
        )}

        <Grid container xs={12} sm={12} md={8}>
          <Grid xs={6} md={9}>
            {mdUp ? (
              <LargeItem caseStudy={events[1]} />
            ) : (
              <SmallItem caseStudy={socials[0]} square />
            )}
          </Grid>

          <Grid xs={6} md={3}>
            <Stack
              justifyContent={{ md: "flex-end" }}
              sx={{ height: { md: 1 } }}
            >
              <SmallItem caseStudy={socials[1]} square />
            </Stack>
          </Grid>

          <Grid xs={6} md={3}>
            <SmallItem caseStudy={socials[2]} square />
          </Grid>

          <Grid xs={6} md={9}>
            {mdUp ? (
              <LargeItem caseStudy={events[0]} />
            ) : (
              <SmallItem caseStudy={socials[3]} square />
            )}
          </Grid>
        </Grid>

        {mdUp && (
          <Grid xs={6} md={2}>
            <SmallItem caseStudy={socials[3]} />
          </Grid>
        )}
      </Grid>

      <Stack alignItems={{ xs: "center", md: "flex-end" }}>
        <Button
          component={RouterLink}
          to={`/events`}
          size="large"
          color="inherit"
          endIcon={<Iconify icon="carbon:chevron-right" />}
        >
          View all
        </Button>
      </Stack>
    </Container>
  );
}

LandingCaseStudies.propTypes = {
  caseStudies: PropTypes.array,
};

// ----------------------------------------------------------------------

function LargeItem({ caseStudy }) {
  const navigate = useNavigate();
  return (
    <Paper
      sx={{
        display: "grid",
        borderRadius: 2,
        boxShadow: (theme) => theme.customShadows.z24,
        gridTemplateColumns: {
          xs: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        },
      }}
    >
      <Box sx={{ p: 0.75 }}>
        <Image
          alt="cover"
          src={caseStudy.coverUrl}
          ratio="3/4"
          sx={{ borderRadius: 2 }}
        />
      </Box>

      <Stack
        alignItems="flex-end"
        justifyContent="space-between"
        sx={{ p: 3, pt: 5, height: 1 }}
      >
        <div>
          <Typography variant="overline" sx={{ color: "primary.main" }}>
            {caseStudy.category}
          </Typography>

          <Typography variant="h4" sx={{ mt: 1, mb: 2 }}>
            {caseStudy.title}
          </Typography>

          <TextMaxLine variant="body2" sx={{ color: "text.secondary" }}>
            {caseStudy.description}
          </TextMaxLine>
        </div>

        <Button
          component={RouterLink}
          to={`/events/${caseStudy.id}`}
          size="small"
          color="inherit"
          endIcon={<Iconify icon="carbon:chevron-right" />}
        >
          Learn more
        </Button>
      </Stack>
    </Paper>
  );
}

LargeItem.propTypes = {
  caseStudy: PropTypes.shape({
    category: PropTypes.string,
    coverUrl: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
  }),
};

// ----------------------------------------------------------------------

function SmallItem({ caseStudy, square }) {
  const navigate = useNavigate();
  const theme = useTheme();

  const mdUp = useResponsive("up", "md");

  let targetValue, url;

  if (caseStudy.hasOwnProperty("eventDate")) {
    targetValue = "";
    url = `/events/${caseStudy.id}`;
  } else {
    targetValue = "_blank";
    url = caseStudy.website;
  }

  return (
    <Link component={RouterLink} to={url} target={targetValue}>
      <Paper
        component={m.div}
        whileHover="hover"
        sx={{
          position: "relative",
          cursor: "pointer",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <Stack
          spacing={1}
          alignItems="center"
          justifyContent="center"
          sx={{
            width: 1,
            height: 1,
            zIndex: 9,
            position: "absolute",
            color: "common.white",
            textAlign: "center",
          }}
        >
          <Typography variant="overline" sx={{ opacity: 0.48 }}>
            {caseStudy.category}
          </Typography>
          <Typography variant="h6">{caseStudy.title}</Typography>
        </Stack>

        <m.div variants={varHover(1.25)} transition={varTranHover()}>
          <Image
            alt="cover"
            src={caseStudy.coverUrl}
            ratio={(square && "1/1") || (mdUp && "3/4") || "1/1"}
            overlay={alpha(theme.palette.grey[900], 0.48)}
          />
        </m.div>
      </Paper>
    </Link>
  );
}

SmallItem.propTypes = {
  caseStudy: PropTypes.shape({
    category: PropTypes.string,
    coverUrl: PropTypes.string,
    title: PropTypes.string,
  }),
  square: PropTypes.bool,
};
