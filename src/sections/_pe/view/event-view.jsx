import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";

import { _caseStudies, _testimonials } from "../../../_mock";

import Image from "../../../components/image";
import Markdown from "../../../components/markdown";

import CaseStudyDetailsGallery from "../details/case-study-details-gallery";
import CaseStudyDetailsSummary from "../details/case-study-details-summary";
import { useEvent } from "../../../Events/useEvent";
import { SplashScreen } from "../../../components/loading-screen";
import NotFoundPage from "../../../pages/404";

// ----------------------------------------------------------------------

export default function EventView() {
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

      {/* <LandingFreeSEO /> */}
    </>
  );
}
