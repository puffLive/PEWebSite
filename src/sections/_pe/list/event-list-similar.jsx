import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { paths } from "../../../routes/paths";
import { RouterLink } from "../../../routes/components";

import { useResponsive } from "../../../hooks/use-responsive";

import Iconify from "../../../components/iconify";

import CaseStudyItem from "./event-item";

// ----------------------------------------------------------------------

export default function CaseStudyListSimilar({ caseStudies }) {
  const mdUp = useResponsive("up", "md");

  const viewAllBtn = (
    <Button
      component={RouterLink}
      href={paths.marketing.caseStudies}
      color="inherit"
      endIcon={<Iconify icon="carbon:chevron-right" />}
    >
      View All
    </Button>
  );

  return (
    <Container
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={{ xs: "center", md: "space-between" }}
        sx={{
          mb: { xs: 8, md: 10 },
        }}
      >
        <Typography variant="h3">You Might Like</Typography>

        {mdUp && viewAllBtn}
      </Stack>

      <Box
        sx={{
          gap: 4,
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
        }}
      >
        {caseStudies.map((project) => (
          <MarketingCaseStudyItem key={project.id} project={project} />
        ))}
      </Box>

      {!mdUp && (
        <Stack alignItems="center" sx={{ mt: 8 }}>
          {viewAllBtn}
        </Stack>
      )}
    </Container>
  );
}

CaseStudyListSimilar.propTypes = {
  caseStudies: PropTypes.array,
};
