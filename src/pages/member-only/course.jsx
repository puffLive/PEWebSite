import { Helmet } from 'react-helmet-async';

import MembersOnlyCourseView from 'src/sections/_members-only/view/members-only-course-view';

// ----------------------------------------------------------------------

export default function MembersOnlyCoursePage() {
  return (
    <>
      <Helmet>
        <title> E-learning: Course</title>
      </Helmet>

      <MembersOnlyCourseView />
    </>
  );
}
