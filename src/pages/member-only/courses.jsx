import { Helmet } from 'react-helmet-async';

import MembersOnlyCoursesView from 'src/sections/_members-only/view/members-only-courses-view';

// ----------------------------------------------------------------------

export default function MembersOnlyCoursesPage() {
  return (
    <>
      <Helmet>
        <title> E-learning: Courses</title>
      </Helmet>

      <MembersOnlyCoursesView />
    </>
  );
}
