import NavLinks from "./NavLinks";

export default function NavBar() {
  return (
    <nav className="bg-red-300 w-full py-6">
      <ul className="flex items-center gap-4">
        <NavLinks/>
      </ul>
    </nav>
  );
}
