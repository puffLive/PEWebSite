import { Helmet } from 'react-helmet-async';

import MembersOnlyPostView from 'src/sections/_members-only/view/members-only-post-view';

// ----------------------------------------------------------------------

export default function MembersOnlyPostPage() {
  return (
    <>
      <Helmet>
        <title> E-learning: Blog Post</title>
      </Helmet>

      <MembersOnlyPostView />
    </>
  );
}
