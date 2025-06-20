'use client'
import Heading from "../components/Heading";

const Header = () => {
  return (
    <header className="text-black z-10 w-full bgwhite p-4 flex justify-between items-center fixed top-0">
      <Heading className="" size="h1">Project Elite</Heading>
      <nav className="mt-2">
      <ul className="flex space-x-4">
        <li>
        <a
          href="#home"
          className="hover:underline"
          onClick={e => {
          e.preventDefault();
          const el = document.getElementById('home');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Home
        </a>
        </li>
<li>
        <a
          href="#courses"
          className="hover:underline"
          onClick={e => {
          e.preventDefault();
          const el = document.getElementById('courses');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Courses
        </a>
        </li>

        <li>
        <a
          href="#about"
          className="hover:underline"
          onClick={e => {
          e.preventDefault();
          const el = document.getElementById('about');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          About
        </a>
        </li>
        <li>
        <a
          href="#contact"
          className="hover:underline"
          onClick={e => {
          e.preventDefault();
          const el = document.getElementById('about');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Contact us
        </a>
        </li>
      </ul>
      </nav>
    </header>
  );
}

export default Header;