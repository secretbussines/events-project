("");
import Link from "next/link";

function NavBar() {
  return (
    <nav className="bg-black text-white flex justify-around py-5 items-center">
      <Link href={"/"} className="font-semibold text-5xl">
        NextEvents
      </Link>
      <Link href={`events/`} className="text-2xl font-medium">
        Browse All Events
      </Link>
    </nav>
  );
}

export default NavBar;
