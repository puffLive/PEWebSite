import {
  _brands,
  _members,
  _caseStudies,
  _testimonials,
  _marketingPosts,
  _pricingMarketing,
} from "../../../../src/_mock";

import MarketingTeam from "../team/marketing-team";
import MarketingNewsletter from "../marketing-newsletter";
import MarketingLandingHero from "../landing/marketing-landing-hero";
import MarketingLandingFaqs from "../landing/marketing-landing-faqs";
import MarketingLandingAbout from "../landing/marketing-landing-about";
import MarketingLandingFreeSEO from "../landing/marketing-landing-free-seo";
import BlogMarketingLatestPosts from "../../blog/marketing/marketing-latest-posts";

import { useMembers } from "../../../members/useMembers";
import MarketingLandingCaseStudies from "../landing/marketing-landing-case-studies";

import { Socials } from "../../../assets/data/EventsAndSocials/eventsandsocials";
import { useEvents } from "../../../Events/useEvents";

// ----------------------------------------------------------------------

export default function MarketingLandingView() {
  const { isLoading: membersIsLoading, members } = useMembers();
  const { isLoading: eventsIsLoading, events } = useEvents();

  return (
    <>
      {!membersIsLoading & !eventsIsLoading && (
        <>
          <MarketingLandingHero />

          <MarketingLandingAbout />

          <MarketingLandingCaseStudies
            events={events}
            socials={Socials.slice(-4)}
          />

          <MarketingTeam members={members} />

          <MarketingLandingFaqs />

          {/* <BlogMarketingLatestPosts posts={_marketingPosts.slice(0, 4)} /> */}

          <MarketingLandingFreeSEO />

          {/* <MarketingNewsletter /> */}
        </>
      )}
    </>
  );
}
