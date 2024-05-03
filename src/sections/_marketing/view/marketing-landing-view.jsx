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

// ----------------------------------------------------------------------

export default function MarketingLandingView() {
  const { isLoading, members } = useMembers();

  return (
    <>
      {!isLoading && (
        <>
          <MarketingLandingHero />

          <MarketingLandingAbout />

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
