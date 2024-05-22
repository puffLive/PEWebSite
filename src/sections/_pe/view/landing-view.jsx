import {
  _brands,
  _members,
  _caseStudies,
  _testimonials,
  _marketingPosts,
  _pricingMarketing,
} from "../../../_mock";

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

// ----------------------------------------------------------------------

export default function LandingView() {
  const { isLoading: membersIsLoading, members } = useMembers();
  const { isLoading: eventsIsLoading, events } = useEvents();
  const { isLoading: blogPostsIsLoading, blogPosts } = useBlogPosts();

  return (
    <>
      {!membersIsLoading & !eventsIsLoading & !blogPostsIsLoading && (
        <>
          <LandingHero />

          <LandingAbout />

          <LandingCaseStudies events={events} socials={Socials.slice(-4)} />

          <Team members={members} />

          <LandingFaqs />

          <LatestPosts posts={blogPosts} />

          <LandingFreeSEO />

          {/* <Newsletter /> */}
        </>
      )}
    </>
  );
}
