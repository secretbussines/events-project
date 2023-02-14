"use client";
import { getFilteredEvents } from "@/dummy-data";
import EventCard from "@/app/compount/eventcard";
function FilteredEvents({ params }: any) {
  if (!params.slug) {
    return <h1>slug not found</h1>;
  }
  const filterdEvents = getFilteredEvents(params.slug);
  return (
    <main className="flex justify-center m-4 flex-col items-center">
      <ul>
        {filterdEvents.map((data) => (
          <EventCard
            key={data.id}
            id={data.id}
            date={data.date}
            imgUrl={data.image}
            address={data.location}
            title={data.title}
          />
        ))}
      </ul>
    </main>
  );
}

export default FilteredEvents;
