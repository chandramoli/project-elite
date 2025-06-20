'use client'
import Heading from "../components/Heading";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-20 px-8 py-4 flex items-center justify-between">
      <Heading className="text-2xl text-gray-900 font-bold tracking-tight" size="h1">
      Project Elite
      </Heading>
      <nav>
      <ul className="flex gap-8 items-center">
        {[
        { label: "Home", id: "home" },
        { label: "Courses", id: "courses" },
        { label: "About", id: "about" },
        { label: "Contact Us", id: "about" },
        ].map(({ label, id }) => (
        <li key={id}>
          <a
          href={`#${id}`}
          className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-2 py-1 rounded hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
          onClick={e => {
            e.preventDefault();
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          >
          {label}
          </a>
        </li>
        ))}
      </ul>
      </nav>
    </header>
  );
}

export default Header;