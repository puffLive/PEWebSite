import { Helmet } from 'react-helmet-async';

import MembersOnlyAboutView from 'src/sections/_members-only/view/members-only-about-view';

// ----------------------------------------------------------------------

export default function MembersOnlyAboutPage() {
  return (
    <>
      <Helmet>
        <title> E-learning: About us</title>
      </Helmet>

      <MembersOnlyAboutView />
    </>
  );
}
