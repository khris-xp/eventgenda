import EventCard from "@/components/Card/EventCard";

export default function EventsPage() {
  return (
    <div className="flex justify-center container mx-auto py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}
