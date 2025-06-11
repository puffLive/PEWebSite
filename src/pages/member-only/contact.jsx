import { Helmet } from 'react-helmet-async';

import MembersOnlyContactView from 'src/sections/_members-only/view/members-only-contact-view';

// ----------------------------------------------------------------------

export default function MembersOnlyContactPage() {
  return (
    <>
      <Helmet>
        <title> E-learning: Contact us</title>
      </Helmet>

      <MembersOnlyContactView />
    </>
  );
}
