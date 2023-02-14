"use client";
import EventSearch from "../compount/eventSearch";
import { getAllEvents, getEventById } from "@/dummy-data";
import EventCard from "../compount/eventcard";
import { useRouter } from "next/navigation";

function Events(params: any) {
  const router = useRouter();
  const featuredEvents = getAllEvents();
  function findEventsHandler(year: string, month: string) {
    const pathName = `events/${year}/${month}`;
    router.push(pathName);
  }
  return (
    <main>
      <div className="flex justify-center m-4 flex-col items-center">
        <EventSearch onSearch={findEventsHandler} />
        <ul>
          {featuredEvents.map((data) => (
            <li key={data.id}>
              <EventCard
                id={data.id}
                title={data.title}
                description={data.description}
                imgUrl={data.image}
                date={data.date}
                address={data.location}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Events;
