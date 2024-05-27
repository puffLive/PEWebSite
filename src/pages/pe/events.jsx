import { Helmet } from "react-helmet-async";

import EventsView from "../../sections/_pe/view/events-view";

// ----------------------------------------------------------------------

export default function EventsPage() {
  return (
    <>
      <Helmet>
        <title>Principle Evolution: Events</title>
      </Helmet>

      <EventsView />
    </>
  );
}
