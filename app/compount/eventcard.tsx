"use client";
import Image from "next/image";
import Link from "next/link";
function EventCard({ props }: { props: any }) {
  const { title, date, id, address, imgUrl } = props;
  return (
    <div className="flex shadow-2xl shadow-black rounded-xl m-12 max-h-72 max-w-3xl hover:scale-105 duration-300">
      <img
        className="rounded-l-xl w-1/2 object-cover h-80"
        src={`/${imgUrl}`}
        alt={title}
      />
      <div className="bg-slate-500 p-4 rounded-r-xl flex flex-col h-80 w-full">
        <h1 className="text-3xl font-bold">{title}</h1>
        <time className="pt-3 text-xl font-bold">{date}</time>
        <address className="pt-3 text-xl font-semibold">{address}</address>
        <div className="flex h-full justify-end items-end">
          <button className="py-1 px-2 my-3 mx-2 bg-green-500 rounded-md text-xl font-semibold hover:scale-105 duration-200">
            <Link href={`events/${id}`}>Explore Event</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
