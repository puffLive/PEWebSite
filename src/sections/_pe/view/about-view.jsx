import { _members, _brandsColor, _testimonials } from "../../../_mock";

import About from "../about/about";
import Newsletter from "../newsletter";
import TeamAbout from "../team/team-about";
import AboutStory from "../about/about-story";
import LandingFaqs from "../landing/landingfaqs";
import AboutOurClients from "../about-our-clients";
import Testimonial from "../testimonial/testimonial";
import AboutOurVision from "../about/about-our-vision";
import LandingFreeSEO from "../landing/landing-free-seo";
import AboutCoreValues from "../about/about-core-values";

// ----------------------------------------------------------------------

export default function MarketingAboutView() {
  return (
    <>
      <About />

      <AboutOurVision />

      <AboutCoreValues />

      <AboutStory />

      <TeamAbout members={_members} />

      <AboutOurClients brands={_brandsColor} />

      <Testimonial testimonials={_testimonials} />

      <LandingFaqs />

      <LandingFreeSEO />

      <Newsletter />
    </>
  );
}
