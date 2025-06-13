import {
  _courses,
  _members,
  _coursePosts,
  _brandsColor,
  _testimonials,
  _coursesByCategories,
} from "../../../_mock";

import MembersOnlyLandingHero from "../landing/members-only-landing-hero";
import MembersOnlyLatestPosts from "../../blog/members-only/members-only-latest-posts";
import MembersOnlyLandingFeaturedCourses from "../landing/members-only-landing-featured-courses";
import { useCheckAuth } from "../../../auth/useCheckAuth";
import { SplashScreen } from "../../../components/loading-screen";
import { Navigate, useNavigate } from "react-router-dom";
import { paths } from "../../../routes/paths";

// ----------------------------------------------------------------------

export default function MembersOnlyLandingView() {
  const { isLoading, member, error } = useCheckAuth();
  const navigate = useNavigate();

  // Show loading screen while checking auth
  if (isLoading) {
    return <SplashScreen />;
  }

  // If there's an error or no member after loading, redirect to sign in
  if (!isLoading && (!member || error)) {
    return <Navigate to={paths.pe.signIn} />;
  }

  return (
    <>
      <MembersOnlyLandingHero />

      <MembersOnlyLandingFeaturedCourses courses={_courses} />

      <MembersOnlyLatestPosts posts={_coursePosts.slice(0, 4)} />
    </>
  );
}
