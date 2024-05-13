import { Helmet } from "react-helmet-async";

import CaseStudiesView from "../../sections/_pe/view/case-studies-view";

// ----------------------------------------------------------------------

export default function CaseStudiesPage() {
  return (
    <>
      <Helmet>
        <title>Case Studies</title>
      </Helmet>

      <CaseStudiesView />
    </>
  );
}
