import { Helmet } from 'react-helmet-async';

import MembersOnlyPostsView from 'src/sections/_members-only/view/members-only-posts-view';

// ----------------------------------------------------------------------

export default function MembersOnlyPostsPage() {
  return (
    <>
      <Helmet>
        <title> E-learning: Blog</title>
      </Helmet>

      <MembersOnlyPostsView />
    </>
  );
}
