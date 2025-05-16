import Team from "../team/team";
import LandingHero from "../landing/landing-hero";
import LandingFaqs from "../landing/landing-faqs";
import LandingAbout from "../landing/landing-about";
import LandingFreeSEO from "../landing/landing-free-seo";

import { useMembers } from "../../../members/useMembers";
import LandingCaseStudies from "../landing/landing-case-studies";

import { Socials } from "../../../assets/data/EventsAndSocials/eventsandsocials";
import { useEvents } from "../../../Events/useEvents";
import LatestPosts from "../../blog/pe/latest-posts";
import { useBlogPosts } from "../../../Blog/useBlogPosts";
import { SplashScreen } from "../../../components/loading-screen";

// ----------------------------------------------------------------------

export default function LandingView() {
  const { isLoading: membersIsLoading, members } = useMembers();
  const { isLoading: eventsIsLoading, events } = useEvents();
  const { isLoading: blogPostsIsLoading, blogPosts } = useBlogPosts();

  if (membersIsLoading || eventsIsLoading || blogPostsIsLoading)
    return <SplashScreen />;

  return (
    <>
      <LandingHero />

      <LandingAbout />

      <LandingCaseStudies events={events} socials={Socials.slice(-4)} />

      <Team members={members} />

      <LandingFaqs />

      <LatestPosts posts={blogPosts} />

      <LandingFreeSEO />
    </>
  );
}
