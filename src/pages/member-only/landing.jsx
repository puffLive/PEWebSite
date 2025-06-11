import { Helmet } from "react-helmet-async";

import MembersOnlyLandingView from "../../sections/_members-only/view/members-only-landing-view";

// ----------------------------------------------------------------------

export default function MembersOnlyLandingPage() {
  return (
    <>
      <Helmet>
        <title> Members Only: Home</title>
      </Helmet>

      <MembersOnlyLandingView />
    </>
  );
}
