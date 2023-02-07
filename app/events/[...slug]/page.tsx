"use client";
import { getFilteredEvents } from "@/dummy-data";
import EventCard from "@/app/compount/eventcard";
function FilteredEvents(params: any) {
  const filterdEvents = getFilteredEvents(params.slug);
  return (
    <main>
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
