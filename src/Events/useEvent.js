import { useQuery } from "@tanstack/react-query";
import { getEvent } from "../services/apiEvents";
import { useSearchParams } from "react-router-dom";

export function useEvent() {
  const [searchParams] = useSearchParams();

  const eventId = searchParams.get("eventId");

  const {
    isLoading,
    data: event,
    error,
  } = useQuery({
    queryKey: ["booking", eventId],
    queryFn: () => getEvent(eventId),
  });

  return { isLoading, error, event };
}
