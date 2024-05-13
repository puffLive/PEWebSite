import { Helmet } from "react-helmet-async";

import ServicesView from "../../sections/_marketing/view/services-view";

// ----------------------------------------------------------------------

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Services</title>
      </Helmet>

      <ServicesView />
    </>
  );
}
