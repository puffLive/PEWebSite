import { Helmet } from "react-helmet-async";

import CaseStudyView from "../../sections/_pe/view/case-study-view";

// ----------------------------------------------------------------------

export default function CaseStudyPage() {
  return (
    <>
      <Helmet>
        <title>Principle Evolution: Let&apos;s Grow!</title>
      </Helmet>

      <CaseStudyView />
    </>
  );
}
