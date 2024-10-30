import {
  CreateEventDto,
  FundingEventDto,
  UpdateEventDto,
} from "@/common/dto/event.dto";
import { eventService } from "@/services/event.service";
import { useEventStore } from "@/stores/event.store";
import { EventType } from "@/types/event.type";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const useEvent = (eventId?: string | string[]) => {
  const queryClient = useQueryClient();
  const { filterEvents } = useEventStore();

  const eventsQuery = useQuery<{ data: EventType[] }, Error>(
    "events",
    async () => await eventService.getEvents(),
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  );
  const eventQuery = useQuery<{ data: EventType } | null, Error>(
    ["event", eventId],
    async () => {
      if (!eventId) {
        return null;
      }
      return await eventService.getEvent(eventId as string);
    },
    {
      refetchOnWindowFocus: false,
      enabled: !!eventId,
      onSuccess: (data) => {
        if (data) {
          queryClient.setQueryData(["event", eventId], data);
        }
      },
    },
  );

  const createEventMutation = useMutation(
    (event: CreateEventDto) => eventService.createEvent(event),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("events");
      },
    },
  );

  const updateEventMutation = useMutation(
    ({ event, id }: { event: UpdateEventDto; id: string }) =>
      eventService.updateEvent(id, event),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("events");
        queryClient.invalidateQueries(["event", eventId]);
      },
    },
  );

  const joinEventMutation = useMutation(
    (id: string) => eventService.joinEvent(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("events");
        queryClient.invalidateQueries(["event", eventId]);
      },
    },
  );

  const exitEventMutation = useMutation(
    (id: string) => eventService.exitEvent(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("events");
        queryClient.invalidateQueries(["event", eventId]);
      },
    },
  );

  const approveEventMutation = useMutation(
    (id: string) => eventService.approveEvent(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("events");
        queryClient.invalidateQueries(["event", eventId]);
      },
    },
  );

  const rejectEventMutation = useMutation(
    (id: string) => eventService.rejectEvent(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("events");
        queryClient.invalidateQueries(["event", eventId]);
      },
    },
  );

  const fundingEventMutation = useMutation(
    ({
      id,
      fundingEventDto,
    }: {
      fundingEventDto: FundingEventDto;
      id: string;
    }) => eventService.fundingEvent(id, fundingEventDto),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("events");
        queryClient.invalidateQueries(["event", eventId]);
      },
    },
  );

  const donateEventMutation = useMutation(
    ({
      id,
      fundingEventDto,
    }: {
      fundingEventDto: FundingEventDto;
      id: string;
    }) => eventService.donateEvent(id, fundingEventDto),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("events");
        queryClient.invalidateQueries(["event", eventId]);
      },
    },
  );

  const deleteEventMutation = useMutation(
    (id: string) => eventService.deleteEvent(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("events");
      },
    },
  );

  const filteredEvents = eventsQuery.data?.data
    ? filterEvents(eventsQuery.data.data)
    : [];

  return {
    events: filteredEvents,
    event: eventQuery.data?.data,
    isLoading: eventsQuery.isLoading,
    isError: eventsQuery.isError,
    error: eventsQuery.error,
    eventQuery,
    createEventMutation,
    updateEventMutation,
    deleteEventMutation,
    joinEventMutation,
    exitEventMutation,
    approveEventMutation,
    rejectEventMutation,
    fundingEventMutation,
    donateEventMutation,
  };
};
