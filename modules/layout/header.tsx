import Heading from "../components/Heading";

const Header = () => {
  return (
    <header className="text-black z-10 w-full bgwhite p-4 flex justify-between items-center fixed top-0">
      <Heading className="" size="h1">Project Elite</Heading>
      <nav className="mt-2">
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;