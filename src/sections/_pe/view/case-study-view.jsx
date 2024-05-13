import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";

import { paths } from "../../../routes/paths";

import { _caseStudies, _testimonials } from "../../../_mock";

import Image from "../../../components/image";
import Markdown from "../../../components/markdown";
import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";

import Newsletter from "../newsletter";
import Testimonial from "../testimonial/testimonial";
import LandingFreeSEO from "../landing/landing-free-seo";
import CaseStudyListSimilar from "../list/case-study-list-similar";
import CaseStudyDetailsGallery from "../details/case-study-details-gallery";
import CaseStudyDetailsSummary from "../details/case-study-details-summary";
import { useEvent } from "../../../Events/useEvent";
import { SplashScreen } from "../../../components/loading-screen";
import NotFoundPage from "../../../pages/404";

// ----------------------------------------------------------------------

// const _mockCaseStudy = _caseStudies[0];

export default function CaseStudyView() {
  const { isLoading, event, error } = useEvent();

  if (isLoading) return <SplashScreen />;
  if (error) return <NotFoundPage />;

  const gallaryImgs = event.galleryImgs.split(",");

  return (
    <>
      <Container
        sx={{
          overflow: "hidden",
          pt: 5,
          pb: { xs: 10, md: 15 },
        }}
      >
        <Image
          alt="hero"
          src={event.heroUrl}
          ratio="16/9"
          sx={{ borderRadius: 2, mb: 4 }}
        />

        {/* <CustomBreadcrumbs
          sx={{ my: 5 }}
          links={[
            { name: "Home", href: "/" },
            { name: "Case Studies", href: paths.marketing.caseStudies },
            { name: _mockCaseStudy.title },
          ]}
        /> */}

        <Grid
          container
          spacing={{ xs: 5, md: 8 }}
          direction={{ md: "row-reverse" }}
        >
          <Grid xs={12} md={4}>
            <CaseStudyDetailsSummary event={event} />
          </Grid>

          <Grid xs={12} md={8}>
            <Markdown content={event.content} />
            <CaseStudyDetailsGallery images={gallaryImgs} />
          </Grid>
        </Grid>
      </Container>

      {/* <Testimonial testimonials={_testimonials} /> */}

      {/* <CaseStudyListSimilar caseStudies={_caseStudies.slice(0, 3)} /> */}

      {/* <LandingFreeSEO /> */}

      {/* <Newsletter /> */}
    </>
  );
}
