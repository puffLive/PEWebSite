import { Helmet } from "react-helmet-async";

import EventView from "../../sections/_pe/view/event-view";

// ----------------------------------------------------------------------

export default function EventPage() {
  return (
    <>
      <Helmet>
        <title>Principle Evolution: Event</title>
      </Helmet>

      <EventView />
    </>
  );
}
