import {
  _courses,
  _members,
  _coursePosts,
  _brandsColor,
  _testimonials,
  _coursesByCategories,
} from "../../../_mock";

import MembersOnlyTeam from "../team/members-only-team";
import MembersOnlyNewsletter from "../members-only-newsletter";
import MembersOnlyOurClients from "../members-only-our-clients";
import MembersOnlyDownloadApp from "../members-only-download-app";
import MembersOnlyLandingHero from "../landing/members-only-landing-hero";
import MembersOnlyTestimonial from "../testimonial/members-only-testimonial";
import MembersOnlyLandingIntroduce from "../landing/members-only-landing-introduce";
import MembersOnlyLatestPosts from "../../blog/members-only/members-only-latest-posts";
import MembersOnlyLandingCategories from "../landing/members-only-landing-categories";
import MembersOnlyLandingFeaturedCourses from "../landing/members-only-landing-featured-courses";

// ----------------------------------------------------------------------

export default function MembersOnlyLandingView() {
  return (
    <>
      <MembersOnlyLandingHero />

      <MembersOnlyOurClients brands={_brandsColor} />

      <MembersOnlyLandingIntroduce />

      <MembersOnlyLandingFeaturedCourses courses={_courses} />

      <MembersOnlyLandingCategories categories={_coursesByCategories} />

      <MembersOnlyTeam members={_members.slice(0, 4)} />

      <MembersOnlyTestimonial testimonials={_testimonials} />

      <MembersOnlyLatestPosts posts={_coursePosts.slice(0, 4)} />

      <MembersOnlyDownloadApp />

      <MembersOnlyNewsletter />
    </>
  );
}
