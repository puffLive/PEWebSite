import { Helmet } from "react-helmet-async";

import ProfileView from "../../sections/_pe/view/profile-view";

// ----------------------------------------------------------------------

export default function ProfilePage() {
  return (
    <>
      <Helmet>
        <title>Member Profile</title>
      </Helmet>

      <ProfileView />
    </>
  );
}
