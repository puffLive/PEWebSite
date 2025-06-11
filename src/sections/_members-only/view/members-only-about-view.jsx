import { _members, _coursePosts, _brandsColor, _testimonials } from "src/_mock";

import MembersOnlyAbout from "../about/members-only-about";
import MembersOnlyNewsletter from "../members-only-newsletter";
import MembersOnlyOurClients from "../members-only-our-clients";
import TeamMembersOnlyAbout from "../team/members-only-team-about";
import MembersOnlyAboutHero from "../about/members-only-about-hero";
import MembersOnlyTestimonial from "../testimonial/members-only-testimonial";
import MembersOnlyAboutCoreValues from "../about/members-only-about-core-values";
import MembersOnlyLatestPosts from "../../blog/elearning/members-only-latest-posts";

// ----------------------------------------------------------------------

export default function MembersOnlyAboutView() {
  return (
    <>
      <MembersOnlyAboutHero />

      <MembersOnlyAbout />

      <MembersOnlyAboutCoreValues />

      <TeamMembersOnlyAbout members={_members} />

      <MembersOnlyOurClients brands={_brandsColor} />

      <MembersOnlyTestimonial testimonials={_testimonials} />

      <MembersOnlyLatestPosts posts={_coursePosts.slice(0, 4)} />

      <MembersOnlyNewsletter />
    </>
  );
}
