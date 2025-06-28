
import Link from "next/link";
import Heading from "../components/Heading";

const Header = () => {
  return (
    <header className="fixe top-0 left-0 w-full text-center bg-white shadow-md z-20 md:px-8 py-4 md:flex md:items-center md:justify-between">
   <div className="flex items-center gap-4">
    <Link href="/" aria-label="Homepage">
      <img src="/assets/logo.jpeg" alt="Project ELITE Logo" className="w-12 h-12" />
    </Link>
  </div>
      <nav  aria-label="Main navigation">
      <ul className="md:flex gap-2 items-center hidden">
        {[
        { label: "Home", id: "/" },
        { label: "Trainers", id: "/trainers" },
        { label: "Courses", id: "/courses" },
        { label: "About", id: "/about" },
        { label: "Contact Us", id: "/contact-us" },
        ].map(({ label, id }) => (
        <li key={id}>
          <Link href={`${id}`} 
            className="text-gray-700 font-semibold active:ring-blue-200 hover:text-blue-600 transition-colors px-2 py-1 rounded hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200 !scroll-smooth"
            scroll={true}
          >
            {label}
          {/* </a> */}
          </Link>
        </li>
        ))}
      </ul>
      </nav>
    </header>
  );
}

export default Header;