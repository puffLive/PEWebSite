import { Helmet } from "react-helmet-async";

import ContactView from "../../sections/_marketing/view/contact-view";

// ----------------------------------------------------------------------

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact us</title>
      </Helmet>

      <ContactView />
    </>
  );
}
