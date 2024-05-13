import { Helmet } from "react-helmet-async";

import AboutView from "../../sections/_marketing/view/about-view";

// ----------------------------------------------------------------------

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About us</title>
      </Helmet>

      <AboutView />
    </>
  );
}
