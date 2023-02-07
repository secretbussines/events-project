"use client";
import { getFeaturedEvents } from "@/dummy-data";
import EventCard from "./compount/eventcard";
function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <main>
      <div className="flex justify-center m-4 flex-col items-center">
        <ul>
          {featuredEvents.map((data) => (
            <li key={data.id}>
              <EventCard
                date={data.date}
                title={data.title}
                address={data.location}
                id={data.id}
                imgUrl={data.image}
                description={data.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
export default Home;
