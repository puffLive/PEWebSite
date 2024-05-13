// import React from "react";
import { Helmet } from "react-helmet-async";

import LandingView from "../../sections/_pe/view/landing-view";

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title> Principle Evolution: Let&apos;s Grow!</title>
      </Helmet>

      <LandingView />
    </>
  );
}
