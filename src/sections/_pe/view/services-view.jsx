import { _testimonials, _marketingPosts } from "../../../_mock";

import MarketingNewsletter from "../newsletter";
import MarketingServices from "../services/services";
import MarketingServicesHero from "../services/services-hero";
import MarketingTestimonial from "../testimonial/testimonial";
import MarketingLandingFreeSEO from "../landing/landing-free-seo";
import MarketingServicesInclude from "../services/services-include";
import MarketingServicesBenefits from "../services/services-benefits";
import BlogMarketingLatestPosts from "../../blog/marketing/marketing-latest-posts";
import MarketingServicesHowItWork from "../services/services-how-it-work";

// ----------------------------------------------------------------------

export default function MarketingServicesView() {
  return (
    <>
      <MarketingServicesHero />

      <MarketingServices />

      <MarketingServicesInclude />

      <MarketingServicesBenefits />

      <MarketingServicesHowItWork />

      <MarketingTestimonial testimonials={_testimonials} />

      <BlogMarketingLatestPosts posts={_marketingPosts.slice(0, 4)} />

      <MarketingLandingFreeSEO />

      <MarketingNewsletter />
    </>
  );
}
