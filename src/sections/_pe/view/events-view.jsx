import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { _caseStudies, _testimonials, _marketingPosts } from "../../../_mock";

import Newsletter from "../newsletter";
import EventsList from "../list/event-list";
import Testimonial from "../testimonial/testimonial";
import LandingFreeSEO from "../landing/landing-free-seo";
import BlogLatestPosts from "../../blog/pe/latest-posts";
import { useEvents } from "../../../Events/useEvents";
import { SplashScreen } from "../../../components/loading-screen";

// ----------------------------------------------------------------------

export default function EventsView() {
  const { isLoading: eventsIsLoading, events } = useEvents();

  if (eventsIsLoading) return <SplashScreen />;

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
          <Typography variant="h2">Events</Typography>

          <Typography sx={{ color: "text.secondary" }}>
            These are the times we get to connect and start
            <br /> building real relationships. See you soon.
          </Typography>
        </Stack>

        <EventsList events={events} />
      </Container>
    </>
  );
}
