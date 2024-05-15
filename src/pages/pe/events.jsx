import { Helmet } from "react-helmet-async";

import EventsView from "../../sections/_pe/view/events-view";

// ----------------------------------------------------------------------

export default function EventsPage() {
  return (
    <>
      <Helmet>
        <title>Case Studies</title>
      </Helmet>

      <EventsView />
    </>
  );
}
