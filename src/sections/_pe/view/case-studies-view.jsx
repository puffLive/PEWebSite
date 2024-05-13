import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { _caseStudies, _testimonials, _marketingPosts } from "../../../_mock";

import Newsletter from "../newsletter";
import CaseStudyList from "../list/case-study-list";
import Testimonial from "../testimonial/testimonial";
import LandingFreeSEO from "../landing/landing-free-seo";
import BlogLatestPosts from "../../blog/pe/latest-posts";

// ----------------------------------------------------------------------

export default function MarketingCaseStudiesView() {
  return (
    <>
      <Container>
        <Stack
          spacing={3}
          sx={{
            py: 5,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography variant="h2">Our Case Studies</Typography>

          <Typography sx={{ color: "text.secondary" }}>
            Nullam tincidunt adipiscing enim.
            <br /> Mauris sollicitudin fermentum libero.
          </Typography>
        </Stack>

        <MarketingCaseStudyList caseStudies={_caseStudies} />
      </Container>

      <MarketingTestimonial testimonials={_testimonials} />

      <BlogMarketingLatestPosts posts={_marketingPosts.slice(0, 4)} />

      <MarketingLandingFreeSEO />

      <MarketingNewsletter />
    </>
  );
}
