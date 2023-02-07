"use client";

import { getEventById } from "@/dummy-data";
function Event({ params }: { params: any }) {
  const eventId = params.event;
  const eventData = getEventById(eventId);
  if (!eventData) {
    return (
      <p className="text-4xl flex justify-center m-5 font-bold">
        Event Not Found
      </p>
    );
  }
  return (
    <div className="bg-green-700 flex flex-col items-center">
      <div className="flex justify-center bg-emerald-500 text-5xl font-bold text-white h-52 items-center w-full">
        {eventData.title}
      </div>
      {/* Card for image and address */}
      <div className="bg-gray-900 flex justify-evenly p-8 relative bottom-12 rounded-3xl max-h-96">
        <div className="bg-white rounded-full h-80 w-80 p-1">
          <img
            className="h-full rounded-full object-cover w-full"
            src={"/" + eventData.image}
            alt={eventData.title}
          />
        </div>
        <div className="p-4 flex justify-center flex-col text-white">
          <time className="text-3xl font-semibold">{eventData.date}</time>
          <address className="pt-4 text-xl font-semibold">
            {eventData.location}
          </address>
        </div>
      </div>
      <div className="text-center text-xl font-semibold max-w-4xl">
        {eventData.description}
      </div>
    </div>
  );
}

export default Event;
